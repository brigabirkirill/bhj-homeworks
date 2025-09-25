const textArea = document.getElementById('editor');
const btn = document.getElementById('clear');

textArea.textContent = localStorage.getItem('text');


textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value);
});

btn.addEventListener('click', () => {
    textArea.value = '';
    localStorage.clear();
})