$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);

    $('.button').on('click', function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = '0';
        } else if (buttonPressed === "CE") {
            currentEntry = '0';

        } else if (buttonPressed === '!') {
            function factorial(num) {
                if (num === 0 || num === 1) {
                    return 1;
                }
                for (var i = num; i >= 1; i--) {
                    num *= i;
                }
                return num
            }
            currentEntry = factorial(currentEntry);
        } else if (buttonPressed === "+/-") {
            currentEntry *= -1;
        } else if (buttonPressed === '.') {
            currentEntry += '.';
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') currentEntry = buttonPressed;
            else currentEntry = currentEntry + buttonPressed;
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        } else if (buttonPressed === 'sqrt') {
            currentEntry = Math.sqrt(currentEntry);
        } else if (buttonPressed === '...') {

        } else if (buttonPressed === 'pi') {
            currentEntry = Math.PI;
        } else if (buttonPressed === '=') {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }

        updateScreen(currentEntry);
    });
});

updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
};

isNumber = function (value) {
    return !isNaN(value);
};
isOperator = function (value) {
    return value == '^' || value === '/' || value === '*' || value === '+' || value === '-';
};

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
    if (operation === '^') return Math.pow(a, b);
}