const person = {
    name : "Mohit",
    greet(){
        console.log(`i am ${this.name}`);
    }
}

person.greet();

const greetFnx = person.greet.bind({name : "Max"});
greetFnx();