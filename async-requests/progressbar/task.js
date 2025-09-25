const progress = document.getElementById("progress");
const send = document.getElementById("send");
const form = document.getElementById("form");

send.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  let formData = new FormData(form);
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = function(e) {
    const progressValue = e.loaded / e.total    
    progress.value = progressValue;  
  }

  xhr.send(formData);
  
});