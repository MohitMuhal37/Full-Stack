const { log } = require("console");
const fs = require("fs");
const filePathe = "./tasks.json";


const addTasks

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