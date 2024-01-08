const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const res = [];

    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
    });

    return res.join('');
};

const isValid = (str, int) => {
    let errText = '';

    if (!str || str.match(/[e.]/g)) {
        errText = 'Por favor ingrese un número valido.';
    } else if (int < 1) {
        errText = 'Por favor ingresa un número mayor o igual a 1.';
    } else if (int > 3999) {
        errText = 'Por favor ingrese un número menor o igual a 3999.';
    } else {
        //No hay errores detectados
        return true;
    }

    // Manejar el texto de error y el estilo de salida
    output.innerText = errText;
    output.classList.add('alert');

    return false;
};

const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
};

form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
});

convertButton.addEventListener('click', () => {
    updateUI();
});

const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);

    output.classList.remove('hidden');

    clearOutput();

    if (isValid(numStr, int)) {
        output.innerText = convertToRoman(int);
    }
};
