function Person(name, age){
    this.name = name
    this.age = age
}

function Car(make, model){
    this .make = make
    this.model = model
}

let myCar = new Car('Toyota', 'Camry')
console.log(myCar);


function Tea(type){
    this.type = type;
    this.description = () => {
        return `this is a cup of ${this.type}`
    }
}

const lemonTea = new Tea("Green");
console.log(lemonTea.description());
