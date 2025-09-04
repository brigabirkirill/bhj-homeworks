const winCounter = document.getElementById("dead");

const lostCounter = document.getElementById("lost");

const getHole = i => document.getElementById(`hole${i}`)

const winOrLost = () => {
    if (Number(winCounter.textContent) === 10) {
      alert("win")
      winCounter.textContent = 0
      lostCounter.textContent = 0
    } else if (Number(lostCounter.textContent) === 5) {
      alert("lose")
      winCounter.textContent = 0
      lostCounter.textContent = 0
    }
  }

const counter = () => {
    for (let i = 1; i <= 9; i++) {
      getHole(i).onclick = () => {
        if(getHole(i).className.includes("hole_has-mole")) {
          winCounter.textContent = Number(winCounter.textContent) + 1;
          winOrLost();
        } else {
          lostCounter.textContent = Number(lostCounter.textContent) + 1;
          winOrLost();
        }
      }
    }
  }
  
counter();