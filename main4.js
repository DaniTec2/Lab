function calculateArea() {
    const shape = document.getElementById('shape').value;
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const input3 = parseFloat(document.getElementById('input3').value);
    let area = 0;

    switch (shape) {
      case 'square':
        area = input1 * input1;
        break;
      case 'rectangle':
        area = input1 * input2;
        break;
      case 'triangle':
        area = (input1 * input2) / 2;
        break;
      case 'circle':
        area = Math.PI * input3 * input3;
        break;
      default:
        break;
    }

    document.getElementById('result').textContent = `Área: ${area.toFixed(2)}`;
  }