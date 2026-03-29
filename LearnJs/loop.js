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

const arr = [2, 4, 6];
let multiply = [];
for(let i = 0; i < arr.length; i++){
    multiply = arr[i] * 2;
    console.log(multiply); 
}