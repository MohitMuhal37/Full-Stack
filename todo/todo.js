document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById("todo-input");
const inpBtn = document.getElementById("add-task-btn");
const ulList = document.getElementById("todo-list");


let tasks = JSON.parse(localStorage.getItem("task")) || [];
const  addTask = () => 
{
  const taskText = inp.value.trim();
  if(taskText === "")return;

  const newTask = {
    id : Date.now(),
    task : taskText,
    isCompleted : false
  }
  tasks.push(newTask);
  saveTask();
  inp.value = "" //clear input
  console.log(tasks);
  
}

saveTask = () => {
    localStorage.setItem("task", JSON.stringify(task));
}

function rennderTask(task) {
  const li = document.createElement('li');
  li.setAttribute("data-id", task.id);
  if(task.comleted) li.classList.add('completed')
  li.innerHTML =`<span>
  ${task.text}
  </span>
  `;
  ulList.appendChild(li);
}
tasks.forEach((task) => rennderTask(task))
inpBtn.addEventListener("click", addTask)
})