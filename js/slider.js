function onSliderChange() {
    const slider = document.querySelector("#slider");
    const output = document.querySelector(".generator-length__title span");

    const sliderValue = slider.value;

    output.innerHTML = sliderValue;

    slider.oninput = function () {
        output.innerHTML = this.value;
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