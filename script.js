const textareaEl = document.getElementById('text');
const totalEl = document.getElementById('total-word');
const remainingEl = document.getElementById('remaining-word');
const maxWords = parseInt(textareaEl.getAttribute('data-max-words'));

textareaEl.addEventListener('input', () => {
    updateCounter();
});

updateCounter();

function updateCounter() {
    const spaces = textareaEl.value.match(/\S+/g);

    const totalWords = spaces ? spaces.length : 0;
  

    totalEl.innerText = totalWords;
    remainingEl.innerText = maxWords - totalWords;

    if (totalWords >= maxWords) {
        textareaEl.value = textareaEl.value.split(' ').slice(0, maxWords).join(' ');
        remainingEl.innerText = 0;
    }

}