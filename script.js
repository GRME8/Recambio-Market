const modelosPorMarca = {
    Samsung: ['Galaxy S21'],
    Apple: ['iPhone 13'],
    Xiaomi: ['Redmi Note 10'],
    Motorola: ['Moto G100']
};

const marcaSelect = document.getElementById('marca');
const modeloSelect = document.getElementById('modelo');
const resultadoDiv = document.getElementById('resultado');

// Filtrar modelos según la marca seleccionada
marcaSelect.addEventListener('change', function() {
    const modelos = modelosPorMarca[this.value] || [];
    modeloSelect.innerHTML = '<option value="">Selecciona un modelo</option>';
    modelos.forEach(function(modelo) {
        const option = document.createElement('option');
        option.value = modelo;
        option.textContent = modelo;
        modeloSelect.appendChild(option);
    });
});

document.getElementById('calcular').addEventListener('click', function() {
    const marca = marcaSelect.value;
    const modelo = modeloSelect.value;
    const estado = document.getElementById('estado').value;

    let baseValue = 0;

    // Ejemplo de valores base por modelo
    if (modelo === 'Galaxy S21') baseValue = 200;
    else if (modelo === 'iPhone 13') baseValue = 300;
    else if (modelo === 'Redmi Note 10') baseValue = 120;
    else if (modelo === 'Moto G100') baseValue = 150;

    // Ajuste por estado
    if (estado === 'Nuevo') baseValue *= 1.0;
    else if (estado === 'Usado') baseValue *= 0.7;
    else if (estado === 'Dañado') baseValue *= 0.4;

    // Ajuste por marca (opcional)
    if (marca === 'Apple') baseValue *= 1.1;
    else if (marca === 'Xiaomi') baseValue *= 0.9;

    if (!marca || !modelo || !estado) {
        resultadoDiv.textContent = 'Por favor selecciona marca, modelo y estado.';
    } else {
        resultadoDiv.textContent = 'Valor estimado de recambio: $' + baseValue.toFixed(2);
    }
});