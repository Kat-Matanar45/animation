const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
const bird = document.querySelector('.bird');

let count = 0;
let interval;
let active = false;

btnStart.addEventListener('click', () => {
    active = !active;
    flyAnimation();
});

btnReset.addEventListener('click', () => {
    bird.style.left = 0;
    count = 0;
    cancelAnimationFrame(interval);
})

const flyAnimation = () => {
    count++;
    interval = requestAnimationFrame(flyAnimation);

    if ((count < 500) && (active === true)) {bird.style.left = count * 5 + 'px'}
    else { 
        cancelAnimationFrame(interval)
    };
    }



