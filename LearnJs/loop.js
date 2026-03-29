// let sum = 0;
i = 5;
// while(i <= 1024){
//      sum = sum+i;
//      i++;
// }
// console.log(sum);

const countDown = [];
while(i >= 1){
     countDown.push(i);
    i--;
}

console.log(countDown[2]);

let pmt;
const tea =[];
// do{
//     pmt = prompt("Enter fav tea = ");
//     if(pmt !== "stop"){
//         tea.push(pmt);
//     }
// }while(pmt !== "stop");

// const arr = [2, 4, 6];
// let multiply = [];
// for(let i = 0; i < arr.length; i++){
//     multiply = arr[i] * 2;
//     console.log(multiply); 
// }

// const cities = ["paris", "france", "tokyo", "London"];
//  let cityList = []; 
// for(let i = 0; i <= cities.length; i++){
//        cityList = cities[i];
//        console.log(cityList);       
// }

const teas = ["green tea", "black tea","chai", "oolong tea"];
let selectorTea = [];
for(let i = 0; i <= teas.length; i++){
    if(teas[i] === "chai"){
        break;
    }
     selectorTea.push(teas[i]);
}
// console.log(selectorTea);

let city = ["london", "New york", "paris", "Berlin"];
let newCity = [];
for(let i = 0; i < city.length; i++){
    if(city[i] === "paris"){
       continue;
    }
    newCity.push(city[i]); 
}
// console.log(newCity);


let num = [1, 3, 4, 6, 7];
let snum = [];

for(const nums of num){
    if(nums === 4 ){
        break;
    }
    snum.push(nums)
}
// console.log(snum);


let worldCities = {
    sydeny : 23444443,
    newYork : 3433535,
    paris : 655433,
    Berlin : 45456
}

let newCities = {};

for(city in worldCities){
    if(worldCities[city] > 655433){
        continue
    }
    newCities[city] = worldCities[city];
}
console.log(newCities);
