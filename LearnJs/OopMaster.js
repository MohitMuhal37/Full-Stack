class Vehicle {
    constructor(model, make){
        this.model = model;
        this.make = make;
    }

    start(){
        return `This ${this.model} can start`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.model}, model no of ${this.make} this is Moving`
    }
}

const  c1 = new Car("toyota", "2025");
console.log(c1.start());
console.log(c1.drive());

// Encapsulation
class CollegeAcess {
    #isId = true;

    getAccess(){
        return `You can enter in college because your college acces is ${true}`
    }
}

let acess = new CollegeAcess();
console.log(acess.getAccess());
