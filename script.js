'use strict';

const colors = [
  { name: 'red', row: '#d43d4e', subRow: '#922f38' },
  { name: 'yellow', row: '#fde35b', subrow: '#d6a259' },
  { name: 'green', row: '#469f5f', subrow: '#427c54' },
  { name: 'blue', row: '#3a4b89', subrow: '#2D2E4A' },
];

const numberBox = document.querySelectorAll('.number');
console.log(numberBox);

for (let i = 0; i < numberBox.length; i++) {
  numberBox[i].addEventListener('click', function () {
    numberBox[i].classList.toggle('cross');
  });
}
