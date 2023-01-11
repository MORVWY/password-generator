import {
    generateBtn
} from './buttons.js';

export function generatorLogic() {

    // DOM ELEMENTS
    const body = document.querySelector('body'),
        password = body.querySelector('.generator-password__item'),
        passwordLength = body.querySelector('.generator-length__title input'),
        upperCaseEl = body.querySelector('#uppercase'),
        lowerCaseEl = body.querySelector('#lowercase'),
        numberEl = body.querySelector('#number'),
        symbolEl = body.querySelector('#symbol'),
        statusLine = body.querySelector('.generator-level__line span'),
        statusWord = body.querySelector('.generator-level__status span');

    // MAIN OBJ WITH ELEMENTS
    const randomFunc = {
        upper: getRandomUpper,
        lower: getRandomLower,
        number: getRandomNumber,
        symbol: getRandomSymbol,
    };

    // GENERATE EVENT LISTENER
    generateBtn.addEventListener('click', () => {
        const length = +passwordLength.value;

        const hasUpper = upperCaseEl.checked;
        const hasLower = lowerCaseEl.checked;
        const hasNumber = numberEl.checked;
        const hasSymbol = symbolEl.checked;

        password.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
    });

    // GENERATE PASSWORD FUNCTION
    function generatePassword(upper, lower, number, symbol, length) {
        let generatedPassword = '';

        const typesCount = upper + lower + number + symbol;
        const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

        if (typesCount === 0) {
            return console.log('Chose one of the settigns');
        }

        if (typesCount === 1 || typesCount === 2) {
            statusLine.classList.add('weak');
        }

        for (let i = 0; i < length; i++) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];

                generatedPassword += randomFunc[funcName]();
            });
        }

        return generatedPassword.slice(0, length)
            .split('').sort(() => Math.random() - 0.5)
            .join('');
    }

    function disableOnlyCheckbox(){
        let totalChecked = [upperCaseEl, lowerCaseEl, numberEl, symbolEl].filter(el => el.checked);

        totalChecked.forEach(el => {
            if(totalChecked.length == 1){
                el.disabled = true;
            }else{
                el.disabled = false;
            }
        });
    }
    
    [upperCaseEl, lowerCaseEl, numberEl, symbolEl].forEach(el => {
        el.addEventListener('click', () => {
            disableOnlyCheckbox();
        });
    });

    // GET RANDOM VALUES LOGIC
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function getRandomSymbol() {
        const symbols = '~!@#$%^&*()_+{}":?><;.,';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}