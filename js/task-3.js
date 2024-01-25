document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');
  nameInput.addEventListener('input', function () {
    const newValue = nameInput.value.trim();
    const outputName = newValue !== '' ? newValue : 'Anonymous';
    nameOutput.textContent = outputName;
  });
});
