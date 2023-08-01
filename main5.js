function convertir() {
    const masa = document.getElementById('inputMasa').value;
    const masaFrom = document.getElementById('selectMasaFrom').value;
    const informatica = document.getElementById('inputInformatica').value;
    const informaticaFrom = document.getElementById('selectInformaticaFrom').value;

    // Conversiones de masa
    const masaEnKg = {
      kg: 1,
      g: 0.001,
      lb: 0.453592,
      oz: 0.0283495
    };

    // Conversiones de informática
    const informaticaEnB = {
      b: 1,
      B: 8,
      Kb: 1024,
      KB: 8192,
      Mb: 1048576,
      MB: 8388608,
      Gb: 1073741824,
      GB: 8589934592
    };

    // Realizar las conversiones
    const masaResultado = masa * masaEnKg[masaFrom];
    const informaticaResultado = informatica * informaticaEnB[informaticaFrom];

    // Mostrar los resultados
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Resultado de Masa: ${masaResultado.toFixed(4)} kg</p>
      <p>Resultado de Informática: ${informaticaResultado} B</p>
    `;
  }