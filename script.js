let display = document.querySelector('.display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}
function lastRemoveDisplay() {
    display.value = display.value.slice(0, -1);

}

function calculate() {
    try {
        let result= eval(display.value);
        display.value = result;
    }
    catch {
        display.value = "INVALID"
        display.value = result;
    }
}

