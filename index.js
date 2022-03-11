const nums = document.querySelector('.calculator')
const clear = document.querySelector('.button.clear')
const equal = document.querySelector('.button.equal')
const panel = document.querySelector('.panel')

let operationConfirmed = false; // нажата ли кнопка операции

nums.addEventListener('click', (ev) => {
    if (!ev.target.classList.contains('inputable')) return;
    panel.value += ev.target.textContent;
})

clear.addEventListener('click', (ev) => {
    panel.value = '';
})

equal.addEventListener('click', (ev) => {
    str = panel.value;
    i = 0;
    operand1 = '';
    operand2 = '';
    operation = '';
    if (str[i] == '-') { // обработка отрицательного числа
        operand1 += '-';
        i++;
    }
    isFirst = true;
    for (i; i < str.length; ++i) {
        if (str[i] == '+' || str[i] == '-' || str[i] == '/' || str[i] == '*') {
            operation = str[i];
            isFirst = false;
            continue;
        }
        if (isFirst) {
            operand1 += str[i];
        } else {
            operand2 += str[i];
        }
    }
    switch (operation) {
        case '+':
            panel.value = Number(operand1) + Number(operand2);
            break;
        case '-':
            panel.value = Number(operand1) - Number(operand2);
            break;
        case '/':
            panel.value = Number(operand1) / Number(operand2);
            break;
        case '*':
            panel.value = Number(operand1) * Number(operand2);
            break;
        case '':
            panel.value = Number(operand1) + Number(operand2);
            break;
    }
})