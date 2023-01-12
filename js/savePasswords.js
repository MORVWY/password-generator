import {
    passwordDB
} from './passwordDB.js';

import {
    showDeleteAllBtn
} from './buttons.js';

import {
    checkForDublicate
} from './checkDublicate.js';

import {
    alertFunction
} from './alerts.js';

const passwordList = document.querySelector('.passwords-list'),
    saveBtn = document.querySelector('.save');

// ONCLICK SAVE PASSWORDS
saveBtn.addEventListener('click', () => {
    const password = document.querySelector('.generator-password__item');
    const passwordValue = password.value;


    if (passwordValue.trim() == '') {
        alertFunction('Generate password', '#FC5185');
    } else if (passwordDB.length === 5) {
        alertFunction("Can't save more", '#FC5185');
    } else if (!checkForDublicate(passwordValue, passwordDB)) {
        alertFunction("Already saved", '#FC5185');
    } else {
        const passwordData = {
            content: password.value,
            uniqueId: Date.now()
        }
        passwordDB.push(passwordData);
        displayPasswords(passwordDB);
        showDeleteAllBtn();
    }

    localStorage.setItem('passwords', JSON.stringify(passwordDB));
});

// DISPLAY SAVED PASSWORDS FUNCITON
function displayPasswords(item) {
    let pass = '';

    item.forEach(item => {
        pass += `
                <div class="passwords__recent" id='${item.uniqueId}'><input type="text" class="passwords__recent-item" value='${item.content}' readonly></input>

                    <div class="passwords__recent-icons">
                        <img class="copy copy-saved" src="icons/copy.svg" alt="copy icon" title="Copy password">
                        <img class="delete-item" src="icons/delete/delete-item.svg" alt="delete icon"
                            title="Delete password">
                    </div>
                </div>
            `;
    });

    passwordList.innerHTML = pass;
}

export {
    displayPasswords
};