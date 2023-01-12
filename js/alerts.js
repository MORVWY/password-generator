const alerts = document.querySelector('.alerts');

function alertFunction(content, color) {

    alerts.innerHTML = content;
    alerts.style.backgroundColor = color;
    alerts.classList.add('display-block');
    alerts.classList.add('slide-left');

    if (alerts.classList.contains('display-none')) {
        alerts.classList.remove('display-none');
    }

    setTimeout(function () {
        alerts.classList.remove('slide-left');
        alerts.classList.add('slide-right');
    }, 2500);

    setTimeout(function () {
        alerts.classList.remove('slide-right');
        alerts.classList.add('display-none');
    }, 3000);

}

export {
    alertFunction
};