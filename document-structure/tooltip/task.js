const hasTooltip = document.querySelectorAll(".has-tooltip");
ArrForHasTooltip = Array.from(hasTooltip);

ArrForHasTooltip.forEach(elem => {
    let coords = elem.getBoundingClientRect();
    elem.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: ${coords.left}px;">${elem.title}</div>`);
  })
  
  ArrForHasTooltip.forEach(elem => {
    elem.addEventListener("click", (e) =>  {
      e.preventDefault();
       elem.nextElementSibling.classList.toggle("tooltip_active");
    });
  })