import {
    onSliderChange
} from './slider.js';

window.addEventListener('DOMContentLoaded', () => {
    onSliderChange();

    document.querySelector('.copy').addEventListener('click', () => {
        function secureMathRandom() {
            return console.log(window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1));
        }

        secureMathRandom();
    });
});