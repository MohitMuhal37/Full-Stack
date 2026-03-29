/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

const teaFlavours = ["greentea", "black tea", "oolong tea"];
console.log(teaFlavours[0]);


/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/
const cities = ["London", "Tokyo", "New York"];
const favoriteCity = cities[2];
console.log(favoriteCity);
/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

const teaType = ["herbal tea", "white tea", "masala chai"];

teaType[1] = "jasmine tea";

// console.log(teaType[1]);
console.log(teaType);



/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

const citiesVisited = ["London", "Tokyo", "New York"];
citiesVisited.push("berlin")

console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

const teaOrder = ["herbal tea", "white tea", "masala chai", "earlGray"];
const lastOrder = teaOrder;
lastOrder.pop();
console.log(lastOrder);

