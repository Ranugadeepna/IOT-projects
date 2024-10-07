function updateDustbinStatus(id, level) {
    const card = document.getElementById(id);
    const binLiquid = card.querySelector('.bin-liquid'),
          binStatus = card.querySelector('.bin-status'),
          binPercentage = card.querySelector('.bin-percentage'),
          binText = card.querySelector('.bin-text');

          
    binText.innerHTML =id ;
    // Update the bin percentage text
    binPercentage.innerHTML = level + '%';

    // Update the bin liquid height based on the level
    binLiquid.style.height = `${level}%`;

    // Update the bin status and icon based on the level
    if (level === 100) { // Full bin
        binStatus.innerHTML = `Full bin <i class="ri-delete-bin-3-line animated-red "></i>`;
        binLiquid.style.height = '103%'; // Slight overflow to hide the top ellipse
    } else if (level > 35 && level <= 60) { // Moderate level
        binStatus.innerHTML = `Low bin <i class="ri-delete-bin-3-line animated-green"></i>`;
    } else if (level <= 35) { // Charging or very low level
        binStatus.innerHTML = `Very Low <i class="ri-delete-bin-3-line green-color"></i>`;
    } else { // Empty status if no special condition
        binStatus.innerHTML = '';
    }

    // Change bin liquid color based on the level
    if (level >= 80) {
        binLiquid.classList.add('gradient-color-red');
        binLiquid.classList.remove('gradient-color-orange', 'gradient-color-yellow', 'gradient-color-green');
    } else if (level >= 60) {
        binLiquid.classList.add('gradient-color-orange');
        binLiquid.classList.remove('gradient-color-red', 'gradient-color-yellow', 'gradient-color-green');
    } else if (level >= 40) {
        binLiquid.classList.add('gradient-color-yellow');
        binLiquid.classList.remove('gradient-color-red', 'gradient-color-orange', 'gradient-color-green');
    } else {
        binLiquid.classList.add('gradient-color-green');
        binLiquid.classList.remove('gradient-color-red', 'gradient-color-orange', 'gradient-color-yellow');
    }
}
