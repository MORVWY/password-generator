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

function deleteSavedPasswords(id, db) {
    db.forEach((passwordData, item) => {
        if (passwordData.uniqueId == id) {
            db.splice(item, 1);
        }
    });

    localStorage.setItem('passwords', JSON.stringify(passwordDB));
}

function deleteAllSavedPasswords(db) {
    db.splice(0, db.length);
}

const deleteAllBtn = document.querySelector('.delete-all');

deleteAllBtn.addEventListener('click', () => {
    if (passwordDB.length === 0) {
        alertFunction("Nothing to delete", '#FC5185');
    } else {
        deleteAllSavedPasswords(passwordDB);
        displayPasswords(passwordDB);
        showDeleteAllBtn();

        alertFunction('Delete successful', '#38E54D');
    }

    localStorage.setItem('passwords', JSON.stringify(passwordDB));
});

export {
    deleteSavedPasswords,
    deleteAllSavedPasswords
};