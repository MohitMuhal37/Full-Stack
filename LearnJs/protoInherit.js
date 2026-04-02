function Human(gender){
    this.gender = gender;
}

Human.prototype.Male = function () {
    console.log(`I am a ${this.gender}`);    
}
Human.prototype.Female = function () {
    console.log(`I am a ${this.gender}`);    
}

const checkGender = new Human("Male");
checkGender.Male();