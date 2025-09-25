const loader = document.querySelector(".loader");
const items = document.querySelector("#items");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

const preloader = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      loader.classList.remove("loader_active");
      const valute = xhr.response.response.Valute;
      const keys = Object.keys(valute);

      keys.forEach(elem => {
        let itemCode = `${(valute[elem]).CharCode}`;
        let itemValue = `${(valute[elem]).Value}`;
        let name = `${(valute[elem]).Name}`;
        items.innerHTML += `
        <div id="items">
            <div class="item">
              <div class="item__code">
                ${itemCode}
              </div>
              <div class="item__value">
                ${itemValue}
              </div>
              <div class="item__currency">
                руб.
              </div>
            </div>
          </div>
        `
      });
    }
  }
  
  xhr.addEventListener("readystatechange", preloader);
  
  xhr.send();