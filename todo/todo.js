const inp = document.getElementById("todo-input");
const inpBtn = document.getElementById("add-task-btn");
const ulList = document.getElementById("todo-list");


let task = [];

function addTask()
{
  const taskText = inp.value.trim();
  if(taskText === "")return;

  const newTask = {
    id : Date.now(),
    task : taskText,
    isCompleted : false
  }
  task.push(newTask);
  inp.value = "" //clear input
  console.log(task);
  
}
inpBtn.addEventListener("click", addTask)