import {
    passwordDB
} from './passwordDB.js';

export const copyBtn = document.querySelector('.copy'),
    generateBtn = document.querySelector('.generator__button'),
    deleteAllBtn = document.querySelector('.delete-all'),
    copySavedBtn = document.querySelector('.copy-saved'),
    deleteSavedBtn = document.querySelector('.delete-item');

export function showDeleteAllBtn(db) {
    if (db.length > 1) {
        deleteAllBtn.classList.add('show-deleteAll');
    } else {
        deleteAllBtn.classList.remove('show-deleteAll');
    }
}

showDeleteAllBtn(passwordDB);