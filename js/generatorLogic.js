import {
    generateBtn
} from './buttons.js';

import {
    getRandomUpper,
    getRandomLower,
    getRandomNumber,
    getRandomSymbol
} from './randomValues.js';

export function generatorLogic() {

    // DOM ELEMENTS
    const body = document.querySelector('body'),
        password = body.querySelector('.generator-password__item'),
        passwordLength = body.querySelector('.generator-length__title input'),
        upperCaseEl = body.querySelector('#uppercase'),
        lowerCaseEl = body.querySelector('#lowercase'),
        numberEl = body.querySelector('#number'),
        symbolEl = body.querySelector('#symbol');

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

        password.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
    });

    // GENERATE PASSWORD FUNCTION
    function generatePassword(upper, lower, number, symbol, length) {
        let generatedPassword = '';

        const typesCount = upper + lower + number + symbol;
        const typesArr = [{
            upper
        }, {
            lower
        }, {
            number
        }, {
            symbol
        }].filter(item => Object.values(item)[0]);

        for (let i = 0; i < length; i++) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];

                generatedPassword += randomFunc[funcName]();
            });
        }

        return generatedPassword.slice(0, length)
            .split('').sort(() => Math.random() - 0.5).join('');
    }

    function disableOnlyCheckbox() {
        let totalChecked = [upperCaseEl, lowerCaseEl, numberEl, symbolEl].filter(el => el.checked);

        totalChecked.forEach(el => {
            if (totalChecked.length == 1) {
                el.disabled = true;
            } else {
                el.disabled = false;
            }
        });
    }

    [upperCaseEl, lowerCaseEl, numberEl, symbolEl].forEach(el => {
        el.addEventListener('click', () => {
            disableOnlyCheckbox();
        });
    });
}