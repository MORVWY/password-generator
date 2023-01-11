function onSliderChange() {
    const slider = document.querySelector("#slider");
    const output = document.querySelector(".generator-length__title input");

    const sliderValue = slider.value;

    output.value = sliderValue;

    slider.oninput = function () {
        output.value = this.value;
    };

    function handleInputChange(e) {
        let target = e.target;

        if (e.target.type !== 'range') {
            target = document.getElementById('slider');
        }
        
        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = (val - target.min) * 100 / (max - min) + '% 100%';
    }

    slider.addEventListener('input', handleInputChange);
}

export {
    onSliderChange
};