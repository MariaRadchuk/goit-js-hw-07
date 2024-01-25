function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    document.addEventListener('DOMContentLoaded', function () {
      const controlsDiv = document.getElementById('controls');
      const inputElement = controlsDiv.querySelector('input');
      const createButton = controlsDiv.querySelector('[data-create]');
      const destroyButton = controlsDiv.querySelector('[data-destroy]');
      const boxesDiv = document.getElementById('boxes');

      createButton.addEventListener('click', function () {
        const amount = inputElement.value;

        if (amount >= 1 && amount <= 100) {
          createBoxes(amount);
          inputElement.value = '';
        } else {
          alert('Please enter a number between 1 and 100.');
        }
      });

      destroyButton.addEventListener('click', function () {
        destroyBoxes();
      });

      function createBoxes(amount) {
        for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = `${30 + i * 10}px`;
          box.style.height = `${30 + i * 10}px`;
          box.style.backgroundColor = getRandomHexColor();
          boxesDiv.appendChild(box);
        }
      }

      function destroyBoxes() {
        boxesDiv.innerHTML = '';
      }
    });