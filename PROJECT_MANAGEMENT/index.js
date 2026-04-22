import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
});

const my_User = process.env.username
console.log(my_User);

console.log("new backend project");
