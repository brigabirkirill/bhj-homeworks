const form = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = `<div class="task">
    <div class="task__title">${taskInput.value.trim()}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
  if (!(taskInput.value.trim() === "")) {
    taskList.insertAdjacentHTML("afterbegin", task);
    e.target.reset();
    const taskRemove = document.querySelector(".task");
    taskRemove.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.remove();
    });
  }
});