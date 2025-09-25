const pollTitle = document.querySelector(".poll__title");
const pollAnswersActive = document.querySelector(".poll__answers_active");
const pollAnswer = document.querySelectorAll(".poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';

const poll = () => {
    if (xhr.readyState===xhr.DONE && xhr.status === 200) {
  
      let title = xhr.response.data.title;
      pollTitle.textContent = title;

      let answers = xhr.response.data.answers;
      answers.forEach(elem => {
        pollAnswersActive.innerHTML += `
        <button class="poll__answer">${elem}</button>
        `
      });

      Array.from(pollAnswer).forEach(elem => {
        elem.addEventListener("click", () => {
          alert('Спасибо, ваш голос засчитан!')
        })
      })
    };
  }
  
  xhr.addEventListener("readystatechange", poll);
  
  xhr.send();