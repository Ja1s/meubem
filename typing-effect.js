document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["TE AMO", "TE DESEJO", "PRA SEMPRE"];
    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function createSlicedText(text) {
        const slicedDiv = document.createElement('div');
        const topDiv = document.createElement('div');
        topDiv.classList.add('bg-typing');
        topDiv.textContent = text;
        const bottomDiv = document.createElement('div');
        bottomDiv.classList.add('bg-typing0');
        bottomDiv.textContent = text;
        bottomDiv.setAttribute('aria-hidden', 'true');
        slicedDiv.appendChild(topDiv);
        slicedDiv.appendChild(bottomDiv);
        return slicedDiv;
    }

    function type() {
        const wrapper = document.querySelector(".wrapper");
        if (charIndex < textArray[textArrayIndex].length) {
            wrapper.innerHTML = '';
            const slicedText = createSlicedText(textArray[textArrayIndex].substring(0, charIndex + 1));
            wrapper.appendChild(slicedText);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            const wrapper = document.querySelector(".wrapper");
            wrapper.innerHTML = '';
            const slicedText = createSlicedText(textArray[textArrayIndex].substring(0, charIndex - 1));
            wrapper.appendChild(slicedText);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 500);
        }
    }

    function init() {
        charIndex = 0;
        setTimeout(type, newTextDelay);
    }

    init();
});