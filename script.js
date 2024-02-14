'use strict';

// Add clickable cross for 2-11
document.addEventListener('DOMContentLoaded', function () {
  const colors = [
    '.starting-red',
    '.starting-yellow',
    '.starting-blue',
    '.starting-green',
  ];

  colors.forEach(color => {
    const numbers = document.querySelectorAll(color);

    numbers.forEach(function (number, index) {
      number.addEventListener('click', function () {
        // Check if the clicked element already has the .cross class
        const hasCross = this.classList.contains('cross');

        // Remove .cross class from the clicked element
        if (hasCross) {
          this.classList.remove('cross');
          updateCrossCounts();
        } else {
          // Check if any of the following elements have the .cross class
          let canAddCross = true;
          for (let i = index + 1; i < numbers.length; i++) {
            if (numbers[i].classList.contains('cross')) {
              canAddCross = false;
              break;
            }
          }

          // If none of the following elements have .cross, add it to the clicked element
          if (canAddCross) {
            this.classList.add('cross');
            updateCrossCounts();
          }
        }
      });
    });
  });
});

// Unlocked #12 if 5 in a row have .cross
// 1. Create the nodelist of all numbers
const numberNodeList = document.querySelectorAll('.number');

// 2. Turn the nodelist into an array
const numberBoxes = Array.from(numberNodeList);

// 3. Split up into colors
const redNumberBoxes = numberBoxes.splice(0, 12);
const yellowNumberBoxes = numberBoxes.splice(0, 12);
const greenNumberBoxes = numberBoxes.splice(0, 12);
const blueNumberBoxes = numberBoxes.splice(0, 12);

// 4. Allow clicking locked numbers when that specific color row has 5 or more crosses
// For example, need redCrossCount >= 5 to click a red locked number or lock

// Initialize variables to store the cross counts for each array
let redCrossCount = 0;
let yellowCrossCount = 0;
let greenCrossCount = 0;
let blueCrossCount = 0;

// Function to update cross counts for each array
function updateCrossCounts() {
  // Update redCrossCount
  redCrossCount = redNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  document.querySelector('.red-count').textContent = redCrossCount;

  // Update yellowCrossCount
  yellowCrossCount = yellowNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  document.querySelector('.yellow-count').textContent = yellowCrossCount;

  // Update greenCrossCount
  greenCrossCount = greenNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  document.querySelector('.green-count').textContent = greenCrossCount;

  // Update blueCrossCount
  blueCrossCount = blueNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  document.querySelector('.green-count').textContent = greenCrossCount;

  console.log(
    `R: ${redCrossCount}, Y:${yellowCrossCount}, G${greenCrossCount}, B:${blueCrossCount}`
  );
}

const redLockedNumber = document.querySelector('.red-locked-number');
const redLockedLock = document.querySelector('.red-locked-lock');

redLockedNumber.addEventListener('click', function () {
  if (redCrossCount >= 5) {
    redLockedNumber.classList.remove('shake');
    redLockedNumber.classList.toggle('cross');
    updateCrossCounts();
  } else if (redCrossCount < 5 && redLockedNumber.classList.contains('cross')) {
    redLockedNumber.classList.toggle('cross');
  } else {
    redLockedNumber.classList.add('shake');
    setTimeout(function () {
      redLockedNumber.classList.remove('shake');
    }, 1000);
  }
});

redLockedLock.addEventListener('click', function () {
  if (redCrossCount >= 5) {
    redLockedLock.classList.remove('shake');
    redLockedLock.classList.toggle('cross');
    updateCrossCounts();
  } else if (redCrossCount < 5 && redLockedLock.classList.contains('cross')) {
    redLockedLock.classList.toggle('cross');
  } else {
    redLockedLock.classList.add('shake');
    setTimeout(function () {
      redLockedLock.classList.remove('shake');
    }, 200);
  }
});

const yellowLockedNumber = document.querySelector('.yellow-locked-number');
const yellowLockedLock = document.querySelector('.yellow-locked-lock');

yellowLockedNumber.addEventListener('click', function () {
  if (yellowCrossCount >= 5) {
    yellowLockedNumber.classList.remove('shake');
    yellowLockedNumber.classList.toggle('cross');
    updateCrossCounts();
  } else if (
    yellowCrossCount < 5 &&
    yellowLockedNumber.classList.contains('cross')
  ) {
    yellowLockedNumber.classList.toggle('cross');
  } else {
    yellowLockedNumber.classList.add('shake');
    setTimeout(function () {
      yellowLockedNumber.classList.remove('shake');
    }, 1000);
  }
});

yellowLockedLock.addEventListener('click', function () {
  if (yellowCrossCount >= 5) {
    yellowLockedLock.classList.remove('shake');
    yellowLockedLock.classList.toggle('cross');
    updateCrossCounts();
  } else if (
    yellowCrossCount < 5 &&
    yellowLockedLock.classList.contains('cross')
  ) {
    yellowLockedLock.classList.toggle('cross');
  } else {
    yellowLockedLock.classList.add('shake');
    setTimeout(function () {
      yellowLockedLock.classList.remove('shake');
    }, 200);
  }
});

const greenLockedNumber = document.querySelector('.green-locked-number');
const greenLockedLock = document.querySelector('.green-locked-lock');

greenLockedNumber.addEventListener('click', function () {
  if (greenCrossCount >= 5) {
    greenLockedNumber.classList.remove('shake');
    greenLockedNumber.classList.toggle('cross');
    updateCrossCounts();
  } else if (
    greenCrossCount < 5 &&
    greenLockedNumber.classList.contains('cross')
  ) {
    greenLockedNumber.classList.toggle('cross');
  } else {
    greenLockedNumber.classList.add('shake');
    setTimeout(function () {
      greenLockedNumber.classList.remove('shake');
    }, 1000);
  }
});

greenLockedLock.addEventListener('click', function () {
  if (greenCrossCount >= 5) {
    greenLockedLock.classList.remove('shake');
    greenLockedLock.classList.toggle('cross');
    updateCrossCounts();
  } else if (
    greenCrossCount < 5 &&
    greenLockedLock.classList.contains('cross')
  ) {
    greenLockedLock.classList.toggle('cross');
  } else {
    greenLockedLock.classList.add('shake');
    setTimeout(function () {
      greenLockedLock.classList.remove('shake');
    }, 200);
  }
});

const blueLockedNumber = document.querySelector('.blue-locked-number');
const blueLockedLock = document.querySelector('.blue-locked-lock');

blueLockedNumber.addEventListener('click', function () {
  if (blueCrossCount >= 5) {
    blueLockedNumber.classList.remove('shake');
    blueLockedNumber.classList.toggle('cross');
    updateCrossCounts();
  } else if (
    blueCrossCount < 5 &&
    blueLockedNumber.classList.contains('cross')
  ) {
    blueLockedNumber.classList.toggle('cross');
  } else {
    blueLockedNumber.classList.add('shake');
    setTimeout(function () {
      blueLockedNumber.classList.remove('shake');
    }, 1000);
  }
});

blueLockedLock.addEventListener('click', function () {
  if (blueCrossCount >= 5) {
    blueLockedLock.classList.remove('shake');
    blueLockedLock.classList.toggle('cross');
    updateCrossCounts();
  } else if (blueCrossCount < 5 && blueLockedLock.classList.contains('cross')) {
    blueLockedLock.classList.toggle('cross');
  } else {
    blueLockedLock.classList.add('shake');
    setTimeout(function () {
      blueLockedLock.classList.remove('shake');
    }, 200);
  }
});
