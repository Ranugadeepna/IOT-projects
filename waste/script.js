function openNav() {
    document.getElementById("sidebar").style.width = '300px';
    document.getElementById("main").style.marginLeft = '300px';
    document.getElementById("smenu").style.display = 'none';
}

function closeNav() {
    document.getElementById("sidebar").style.width = '0';
    document.getElementById("main").style.marginLeft = '0';
    document.getElementById("smenu").style.display = 'block';
}


function updateDustbinStatus(id, capacity) {
    const card = document.getElementById(id);
    const visualLevel = card.querySelector('.visual-level');
    const statusIndicator = card.querySelector('.status-indicator');
    const capacityText = card.querySelector('.capacity');
    const statusText = card.querySelector('.status-text');

    // Update the visual level width
    visualLevel.style.height = `${capacity}%`; // Set width based on capacity

    // Update status based on capacity
    if (capacity >= 75) {
        statusIndicator.style.backgroundColor = 'red'; // Full
        capacityText.textContent = `Capacity: ${capacity}% `;
        statusText.textContent = 'Status: Full';
    } else if (capacity >= 50) {
        statusIndicator.style.backgroundColor = 'orange'; // Half Full
        capacityText.textContent = `Capacity: ${capacity}%`;
        statusText.textContent = 'Status: Half Full';
    } else {
        statusIndicator.style.backgroundColor = 'green'; // Not Full
        capacityText.textContent = `Capacity: ${capacity}%`;
        statusText.textContent = 'Status: Not Full';
    }
}

// Call this function with the dustbin ID and desired capacity
// updateDustbinStatus('dustbin-1', 60); // Example update
