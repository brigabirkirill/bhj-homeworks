const modalClose = document.querySelector('.modal__close');
const modal = document.getElementById('subscribe-modal');
const cookie = getCookie();
console.log(cookie.modalActive)
if(cookie.modalActive !== 'false') {
modal.classList.add('modal_active');
}

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [ name, value ] = item.split('=');
        acc[name] = value;
        return acc
    }, {})
    }

modalClose.addEventListener('click', () => {
    modalActive = modal.classList.remove('modal_active');
    document.cookie = 'modalActive=false';
    console.log(document.cookie)
})