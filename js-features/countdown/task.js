const decreaseСounter = () => {
    const counter = document.getElementById("timer");
    counter.textContent = Number(counter.textContent) - 1;
    if (Number(counter.textContent) === 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(setIntervalId);
    }
  }
  
  let setIntervalId = setInterval(decreaseСounter,1000); 