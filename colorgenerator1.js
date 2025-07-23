const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

function generateColor() {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return hex;
}

function createPalette(count = 5) {
  palette.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const color = generateColor();
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;

    const code = document.createElement('div');
    code.classList.add('color-code');
    code.innerText = color;

    // Copy to clipboard on click
    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      code.innerText = 'Copied!';
      setTimeout(() => (code.innerText = color), 1000);
    });

    colorBox.appendChild(code);
    palette.appendChild(colorBox);
  }
}

generateBtn.addEventListener('click', () => {
  createPalette();
});

window.onload = createPalette;
