import {displayPasswords} from './savePasswords.js'

export let passwordDB = [];

if (localStorage.getItem('passwords')) {
    passwordDB = JSON.parse(localStorage.getItem('passwords'));
    displayPasswords(passwordDB);
}