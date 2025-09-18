const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");
const tasksListContainer = document.querySelector(".tasks__list");

tasksInput.addEventListener("keyup", e => {
  e.preventDefault();
  tasksInput.value = tasksInput.value.trim();
  if(e.keyCode == 13 && tasksInput.value !== "") {
    tasksListContainer.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${tasksInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  tasksInput.value = ""
  }
})

tasksAdd.addEventListener("click", e => {
  e.preventDefault();
  tasksInput.value = tasksInput.value.trim();
  if(tasksInput.value !== "") {
    tasksListContainer.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${tasksInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  tasksInput.value = ""
  }

  Array.from(document.querySelectorAll(".task__remove")).forEach(elem => {
    elem.addEventListener("click", () => {
      elem.closest(".task").remove();
    })
  });
})