import {
    onSliderChange
} from './slider.js';

import {
    generatorLogic
} from './generatorLogic.js';

import {
    copyPassword
} from './copyBtn.js';

import {
    itemEvents
} from './events.js';

import './buttons.js';
import './savePasswords.js';

window.addEventListener('DOMContentLoaded', () => {
    onSliderChange();
    generatorLogic();
    copyPassword();
    itemEvents();
});