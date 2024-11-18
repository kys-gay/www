const elem = document.querySelector('#information'),
    text = elem.innerText.split(' | ').sort(() => Math.random() - 0.5);
elem.innerText = '.';
let i = 0;

document.addEventListener('DOMContentLoaded', () => {
    const blur = document.createElement('div');
    blur.classList.add('blur-overlay');
    document.body.appendChild(blur);
    document.addEventListener('click', () => {
        blur.style.opacity = 0;
        document.getElementsByTagName("audio")[0].volume = .6;
        document.getElementsByTagName("audio")[0].play();
        blur.addEventListener('transitionend', () => {
            blur.remove();
            (function cycle() {
                elem.style.opacity = 0;
                setTimeout(() => {
                    elem.innerHTML = text[i = ++i % text.length];
                    elem.style.opacity = 1;
                }, 200);
                setTimeout(cycle, text[i].length * 250);
            })();
        });
    });
});