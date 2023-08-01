function convertirInformatica() {
    const valorInput = parseFloat(document.getElementById('conversion-input').value);
    const tipoConversion = document.getElementById('conversion-type').value;
    let resultado;

    switch (tipoConversion) {
        case 'informatica':
            resultado = convertirUnidadInformatica(valorInput);
            break;
        // Agregar más casos según las opciones de conversión que necesites
        default:
            resultado = "Seleccione un tipo de conversión válido";
            break;
    }

    document.getElementById('conversion-result').textContent = `Resultado: ${resultado}`;
}

// Función auxiliar para realizar la conversión de unidades de informática
function convertirUnidadInformatica(valor) {
    const unidadesInformatica = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Terabytes', 'Petabytes'];
    const factorConversion = 1024; // 1 Kilobyte = 1024 Bytes, 1 Megabyte = 1024 Kilobytes, etc.

    let resultado = [];

    for (let i = 0; i < unidadesInformatica.length; i++) {
        if (valor >= 1) {
            resultado.push(`${valor.toFixed(2)} ${unidadesInformatica[i]}`);
        }
        valor /= factorConversion;
    }

    return resultado.join("<br>");
}
