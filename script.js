const modelosPorMarca = {
    Samsung: ['Galaxy S21', 'Galaxy S22', 'Galaxy A52', 'Galaxy Note 20', 'Galaxy S20 FE'],
    Apple: ['iPhone 13', 'iPhone 12', 'iPhone SE', 'iPhone XR', 'iPhone 11'],
    Xiaomi: ['Redmi Note 10', 'Redmi Note 11', 'Mi 11 Lite', 'Poco X3', 'Mi 10T'],
    Motorola: ['Moto G100', 'Moto G60', 'Moto E7', 'Moto Edge 20', 'Moto G9 Power'],
    Huawei: ['P30 Pro', 'Mate 20 Lite', 'Y9 Prime', 'Nova 5T', 'P40 Lite'],
    LG: ['LG Velvet', 'LG K52', 'LG G8X', 'LG Q60', 'LG V50 ThinQ']
};

// Valores base por modelo
const valoresBase = {
    'Galaxy S21': 200,
    'Galaxy S22': 250,
    'Galaxy A52': 140,
    'Galaxy Note 20': 180,
    'Galaxy S20 FE': 160,
    'iPhone 13': 300,
    'iPhone 12': 270,
    'iPhone SE': 180,
    'iPhone XR': 200,
    'iPhone 11': 220,
    'Redmi Note 10': 120,
    'Redmi Note 11': 130,
    'Mi 11 Lite': 150,
    'Poco X3': 140,
    'Mi 10T': 160,
    'Moto G100': 150,
    'Moto G60': 120,
    'Moto E7': 80,
    'Moto Edge 20': 140,
    'Moto G9 Power': 100,
    'P30 Pro': 170,
    'Mate 20 Lite': 110,
    'Y9 Prime': 90,
    'Nova 5T': 130,
    'P40 Lite': 140,
    'LG Velvet': 120,
    'LG K52': 80,
    'LG G8X': 110,
    'LG Q60': 70,
    'LG V50 ThinQ': 130
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

    let baseValue = valoresBase[modelo] || 0;

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
// Botón hamburguesa para móviles
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".menu-links");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }
});
