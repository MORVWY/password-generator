import {
    deleteSavedPasswords
} from './deletePasswords.js';

import {
    passwordDB
} from './passwordDB.js';

import {
    displayPasswords
} from './savePasswords.js';

import {
    showDeleteAllBtn
} from './buttons.js';

import {
    alertFunction
} from './alerts.js';

export function itemEvents() {
    const passwordItem = document.querySelector('.passwords-list');

    passwordItem.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('delete-item')) {
            const uniqueId = target.parentElement.parentElement.getAttribute('id');
    
            deleteSavedPasswords(uniqueId, passwordDB);
            displayPasswords(passwordDB);
            showDeleteAllBtn(passwordDB);
        }

        if (target.classList.contains('copy-saved')) {
            const savedPassword = target.parentElement.parentElement.firstChild;
    
            savedPassword.select();
            savedPassword.setSelectionRange(0, savedPassword.length);
            const savedPasswordValue = savedPassword.value;
            navigator.clipboard.writeText(savedPasswordValue);

            alertFunction('Copied', '#38E54D');
        }
    });
    
    localStorage.setItem('passwords', JSON.stringify(passwordDB));
}