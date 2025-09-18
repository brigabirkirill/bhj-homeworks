const rotatorCase = document.querySelectorAll('.rotator__case');

arrRotatorCase = Array.from(rotatorCase);

let indexCase = -1

const start = () => {
    indexCase === rotatorCase.length - 1 ? indexCase = 0 : indexCase++ 
    ((i)=>{
      arrRotatorCase.forEach(elem => elem.classList.remove('rotator__case_active'))
      arrRotatorCase[i].classList.add('rotator__case_active')
    })(indexCase);

  setTimeout(start, 1000);
}

start();