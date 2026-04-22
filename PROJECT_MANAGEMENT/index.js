import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
});

let my_User = process.env.database
console.log(my_User)

console.log("new backend project");
