const computer = {
    cpu : 12,
    greet : () => {
        return "hey how are you";  
    }
}

const lenovo = {screen : "hd",
    __proto__ : computer
};

const maxHardware = {mouse : "wireLess"
    
};

const a = 45;

console.log(a.hasOwnProperty());
