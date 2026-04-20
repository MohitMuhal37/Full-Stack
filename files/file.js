const { log } = require("console");
const fs = require("fs");
const filepath = "./taskss.json";


const loadTask = (task) => {
    try{
      const dataBuffer = fs.readFileSync(filepath);
      const dataJason = dataBuffer.toString();
      return JSON.parse(dataJason);
    }catch(error){
        return [];
    }
}

const saveTask = (task) => {
    const data = JSON.stringify(task);
    fs.writeFileSync(filepath, data);
}

const showTasks = () => {
    const tasks = loadTask();
    tasks.forEach((task, index) => {
        console.log(`${index+1} - ${task.task}`);
        
    })
}

const addTasks = (task) => {
    const Tasks = loadTask();
    Tasks.push({task});
    saveTask(Tasks);
}

const command = process.argv[2];
const args = process.argv[3];

if(command === "add"){
    addTasks(args);
}else if(command === "list"){
    showTasks();
}else if(command === "remove"){
    removeTasks(parseInt(args));
}else{
    console.log("Connot load Structure to your file"); 
}