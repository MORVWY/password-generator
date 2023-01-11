import {
    onSliderChange
} from './slider.js';

import {
    generatorLogic
} from './generatorLogic.js';

window.addEventListener('DOMContentLoaded', () => {
    onSliderChange();
    generatorLogic();
});