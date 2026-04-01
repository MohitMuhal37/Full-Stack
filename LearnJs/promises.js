function fetchData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let success = true;
        let value = "Mohit";
        if(success){
            resolve("Function is succesfully resolves");
        }else{
            reject("Error not recognised");
        }
        }, 3000);
    });  
};

fetchData()
    .then((data) => {console.log(data)
        return value = "Mohit";
    }).then((value) => {
       return value.toLowerCase();
        
    })
    .catch((error) => console.error(error))