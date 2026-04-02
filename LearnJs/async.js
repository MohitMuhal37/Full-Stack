export function fetchData(){
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve({name : "Mohit", age : 22, email : "mohit@mail.com"})
        }, 5000);
    })
}

export async function getData(){
    try {
        console.log("Fetching the data...");
       const newData =  await fetchData();
       console.log("<<< Data fetched Sucessfully >>>");
       console.log(newData);
    } catch (error) {
        console.log("Error in data", error);
    }
}

getData();