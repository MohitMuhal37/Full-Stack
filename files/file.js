const { log } = require("console");
const fs = require("fs");
const filePath = "./tasks.json";

const loadTask = () => {
    try{
        const dataBuffer = fs.readFileSync(filePath);
        const jsaonData = dataBuffer.toString();
        return JSON.parse(jsaonData);
    }catch(error){
        return [];
    }
}

const SaveTasks = (task) => {
    const jsonData = JSON.stringify(task);
    fs.writeFileSync(filePath, jsonData);
}

const listTasks = () => {
    const task = loadTask();
    task.forEach((task, index) => 
    console.log(`${index + 1} = ${task.task}`)
    )
}

const addTasks = (task) => {
    const Tasks = loadTask();
    Tasks.push({task});
    SaveTasks(Tasks);
    console.log(`Task added = ${task}`);
    
}

const command = process.argv[2];
const args = process.argv[3];

if(command === "add"){
    addTasks(args);
}else if(command === "list"){
    listTasks();
}else if(command === "remove"){
    removeTasks(parseInt(args));
}else{
    console.log("Command not found");
}