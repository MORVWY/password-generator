import {
    copyBtn
} from './buttons.js';

import {
    alertFunction
} from './alerts.js';

export function copyPassword() {
    copyBtn.addEventListener('click', () => {
        const password = document.querySelector('.generator-password__item');

        if (password.value.length === 0) {
            alertFunction("Generate password", '#FC5185');
        } else {
            password.select();
            password.setSelectionRange(0, password.length);
            const passwordValue = password.value;
            navigator.clipboard.writeText(passwordValue);

            alertFunction('Copied', '#38E54D');
        }
    });
}