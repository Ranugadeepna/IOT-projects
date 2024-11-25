s#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <Servo.h>

// Replace with your Wi-Fi credentials
const char* ssid = "Dialog 4G 679";
const char* password = "9bD41Fe7";

// Pin definitions for ultrasonic sensors
#define TRIG_PIN_1 D1 // Garbage level sensor Trig
#define ECHO_PIN_1 D2 // Garbage level sensor Echo
#define TRIG_PIN_2 D6 // User detection sensor Trig
#define ECHO_PIN_2 D7 // User detection sensor Echo

// Pin definition for the servo
#define SERVO_PIN D5 // Servo motor control pin

// Level indicator LED pins
#define LED_1 D0
#define LED_2 D3
#define LED_3 D4

// Wi-Fi status LED pin (repurposed from LED_4)
#define WIFI_STATUS_LED D8 // Use D8 for Wi-Fi status LED

// Define the speed of sound in cm/us
#define SOUND_SPEED 0.0343
#define BIN_HEIGHT 50 // Bin height in centimeters

Servo myservo;  // Create servo object
WiFiClientSecure client;  // Create a secure Wi-Fi client

bool isBinOpen = false;  // To track whether the bin is open or closed

void setup() {
  Serial.begin(115200);
  delay(10);

  // Set up Wi-Fi status LED
  pinMode(WIFI_STATUS_LED, OUTPUT);
  digitalWrite(WIFI_STATUS_LED, LOW); // Initially turn off the Wi-Fi status LED

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(250);
    Serial.print(".");
    digitalWrite(WIFI_STATUS_LED, LOW);  // Turn off LED while connecting
  }
  Serial.println("WiFi connected");
  digitalWrite(WIFI_STATUS_LED, HIGH);  // Turn on LED when connected

  pinMode(TRIG_PIN_1, OUTPUT);
  pinMode(ECHO_PIN_1, INPUT);
  pinMode(TRIG_PIN_2, OUTPUT);
  pinMode(ECHO_PIN_2, INPUT);

  pinMode(LED_1, OUTPUT);
  pinMode(LED_2, OUTPUT);
  pinMode(LED_3, OUTPUT);

  myservo.attach(SERVO_PIN);
  myservo.write(0);  // Initially close the bin (servo at 0 degrees)

  // Turn off all LEDs initially
  digitalWrite(LED_1, LOW);
  digitalWrite(LED_2, LOW);
  digitalWrite(LED_3, LOW);
}

void loop() {
  // Check Wi-Fi connection and update Wi-Fi status LED
  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(WIFI_STATUS_LED, HIGH);  // Turn on Wi-Fi status LED
    Serial.println("Connected to Wi-Fi");
  } else {
    digitalWrite(WIFI_STATUS_LED, LOW);   // Turn off Wi-Fi status LED
    Serial.println("Wi-Fi disconnected");
    return;  // Skip the rest of the loop if Wi-Fi is not connected
  }

  // User detection sensor (sensor2)
  long userDistance = getDistance(TRIG_PIN_2, ECHO_PIN_2);
  if (userDistance > 0 && userDistance < 50) {  // Adjust distance threshold as needed
    Serial.print("User Detected at Distance: ");
    Serial.print(userDistance);
    Serial.println(" cm");
    openBin();
  } else {
    Serial.println("No user detected or user is too far.");
    closeBin();
  }

  if (!isBinOpen) {
    // Garbage level detection (sensor1)
    long garbageDistance = getDistance(TRIG_PIN_1, ECHO_PIN_1);

    if (garbageDistance > 0 && garbageDistance <= BIN_HEIGHT) {
      int garbageLevel = calculateGarbageLevel(garbageDistance);
      Serial.print("Garbage Level: ");
      Serial.print(garbageLevel);
      Serial.println(" %");

      // Turn LEDs on/off based on garbage level
      updateLEDs(garbageLevel);

      HTTPClient http;
      client.setInsecure();  // Ignore SSL certificate
      String url = "https://agraganya-training.lucyday.io/hook/Waste-Management/espinsert";
      http.begin(client, url);
      http.addHeader("Content-Type", "application/json");
      http.setTimeout(5000);  // Set timeout to 5 seconds

      String payload = "{\"id\":\"DB001\", \"value\":" + String(garbageLevel) + "}";
      Serial.print("Sending payload: ");
      Serial.println(payload);

      int httpResponseCode = http.POST(payload);

      if (httpResponseCode > 0) {
        String response = http.getString();
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        Serial.println("Response: " + response);
      } else {
        Serial.print("Error on sending POST: ");
        Serial.println(httpResponseCode);
      }

      http.end();
    } else {
      Serial.println("Out of range for garbage sensor");
    }
  }

  delay(1000);
}

long getDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  long distance = (duration * SOUND_SPEED) / 2;

  return distance;
}

int calculateGarbageLevel(long garbageDistance) {
  return ((BIN_HEIGHT - garbageDistance) * 100) / BIN_HEIGHT;
}

void openBin() {
  if (!isBinOpen) {
    Serial.println("Opening Bin...");
    myservo.write(130);  // Open the bin
    isBinOpen = true;
    delay(3000);
  }
}

void closeBin() {
  if (isBinOpen) {
    Serial.println("Closing Bin...");
    myservo.write(0);  // Close the bin
    isBinOpen = false;
  }
}

void updateLEDs(int garbageLevel) {
  // Adjust these thresholds based on garbage level percentages
  if (garbageLevel <= 33) {
    digitalWrite(LED_1, HIGH);
    digitalWrite(LED_2, LOW);
    digitalWrite(LED_3, LOW);
  } else if (garbageLevel <= 66) {
    digitalWrite(LED_1, HIGH);
    digitalWrite(LED_2, HIGH);
    digitalWrite(LED_3, LOW);
  } else {
    digitalWrite(LED_1, HIGH);
    digitalWrite(LED_2, HIGH);
    digitalWrite(LED_3, HIGH);
  }
}
