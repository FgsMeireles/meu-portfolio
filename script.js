document.addEventListener('DOMContentLoaded', function () {
    const skillIcons = document.querySelectorAll('.skill-icon');
    const descriptionBox = document.getElementById('skill-description');

    skillIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const description = this.getAttribute('data-description');
            descriptionBox.innerHTML = '';

            const words = description.split(' ');

            words.forEach((word, index) => {
                const wordSpan = document.createElement('span');
                wordSpan.style.display = 'inline-block';
                const letters = word.split('');

                letters.forEach((char, index) => {
                    const letterSpan = document.createElement('span');
                    letterSpan.classList.add('text-animate');
                    letterSpan.innerText = char;
                    wordSpan.appendChild(letterSpan);
                    letterSpan.style.animationDelay = `${index * 50}ms`;
                });

                descriptionBox.appendChild(wordSpan);

                if (index < words.length - 1 && !word.endsWith(' ')) {
                    descriptionBox.appendChild(document.createTextNode(' '));
                }
            });

            descriptionBox.style.display = 'block';
        });
    });
});