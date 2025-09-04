const cookieClick = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let bigCookie = () => {cookieClick.width = '200'};
let smallCookie = () => {cookieClick.width = '150'};

cookieClick.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    setTimeout(smallCookie, 80);
    setTimeout(bigCookie, 100);
}