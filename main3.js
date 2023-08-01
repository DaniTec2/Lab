function appendInput(value) {
    document.getElementById('input').value += value;
  }

  function clearInput() {
    document.getElementById('input').value = '';
  }

  function backspace() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = input.slice(0, -1);
  }

  function calculate() {
    let input = document.getElementById('input').value;
    try {
      let result = eval(input);
      document.getElementById('input').value = result;
    } catch (error) {
      document.getElementById('input').value = 'Error';
    }
  }