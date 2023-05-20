const numFirst = document.querySelector('#num-1');
const numSecond = document.querySelector('#num-2');
const operations = document.getElementsByName('operations');
const btn = document.querySelector('.btn');
const calcFooter = document.querySelector('.calc__footer');

function checkInput() {
    return isNaN(numFirst.value) || isNaN(numSecond.value) || numFirst.value === '' || numSecond.value === '' ? false : true;
}

function calcPlus() {
    return parseFloat(numFirst.value) + parseFloat(numSecond.value);
}

function calcMinus() {
    return numFirst.value - numSecond.value;
}

function calcMulti() {
    return numFirst.value * numSecond.value;
}

function calcDivide() {
    return numFirst.value / numSecond.value;
}

function calcResult(result, operations) {
    calcFooter.innerHTML = '';
    let element = document.createElement('div');
    element.classList = 'calc__result text-danger border border-danger-subtle rounded-1 py-2 px-3 mt-3';

    operations === 'plus' ? element.innerHTML = `${numFirst.value} + ${numSecond.value} = ${result}` :
        operations === 'minus' ? element.innerHTML = `${numFirst.value} - ${numSecond.value} = ${result}` :
            operations === 'multi' ? element.innerHTML = `${numFirst.value} * ${numSecond.value} = ${result}` :
                element.innerHTML = `${numFirst.value} / ${numSecond.value} = ${result}`;

    calcFooter.appendChild(element);
}

btn.addEventListener('click', function () {
    let operationSelected;

    if (checkInput()) {
        operations.forEach(function (item) {
            item.checked ? operationSelected = item.value : null;
        })

        let result = operationSelected === 'plus' ? calcPlus() :
            operationSelected === 'minus' ? calcMinus() :
                operationSelected === 'multi' ? calcMulti() : calcDivide();

        calcResult(result.toLocaleString('vi-VN'), operationSelected)
    }
    else {
        alert('Nhập sai rồi bạn ei!');
    }

})