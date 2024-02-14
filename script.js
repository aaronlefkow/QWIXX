'use strict';

// TODO: Add colors better using an object or array
const colors = [
  { name: 'red', row: '#d43d4e', subRow: '#922f38' },
  { name: 'yellow', row: '#fde35b', subrow: '#d6a259' },
  { name: 'green', row: '#469f5f', subrow: '#427c54' },
  { name: 'blue', row: '#3a4b89', subrow: '#2D2E4A' },
];

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
const redNumberBoxes = numberBoxes.splice(0, 10);
const yellowNumberBoxes = numberBoxes.splice(0, 10);
const greenNumberBoxes = numberBoxes.splice(0, 10);
const blueNumberBoxes = numberBoxes.splice(0, 10);

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
  // Update yellowCrossCount
  yellowCrossCount = yellowNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  // Update greenCrossCount
  greenCrossCount = greenNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;
  // Update blueCrossCount
  blueCrossCount = blueNumberBoxes.filter(box =>
    box.classList.contains('cross')
  ).length;

  console.log(
    `R: ${redCrossCount}, Y:${yellowCrossCount}, G${greenCrossCount}, B:${blueCrossCount}`
  );
}

const redLockedNumber = document.querySelector('.red-locked-number');

redLockedNumber.addEventListener('click', function () {
  if (redCrossCount >= 5) {
    console.log(`Red: ${redCrossCount} is >=5`);
    redLockedNumber.classList.remove('shake');
    redLockedNumber.classList.toggle('cross');
  } else if (redCrossCount < 5 && redLockedNumber.classList.contains('cross')) {
    redLockedNumber.classList.toggle('cross');
  } else {
    console.log(`Red: ${redCrossCount} is <5`);
    redLockedNumber.classList.add('shake');
    setTimeout(function () {
      redLockedNumber.classList.remove('shake');
    }, 1000);
  }
});
