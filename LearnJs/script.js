const btn = document.getElementById("changeTextButton");
const btn1 = document.getElementById("highlightFirstCity");
const btn2 = document.getElementById("changeOrder");
const btn3 = document.getElementById("addNewItem");
const btn4 = document.getElementById("removeLastTask");
const btn5 = document.getElementById("clickMeButton");
const para = document.getElementById("myParagraph");
const spans = document.getElementById("coffeeType");
const list  = document.querySelector(".chai");
const ulList = document.getElementById("shoppingList");
const ulList1 = document.getElementById("taskList");

function clickMe  () {
  para.innerHTML = "<h2>What the fuck i am doing here</h2>";
  // console.log(this);
  
}

function changeColor () {
  list.classList.toggle("highlight");
}

function orderChanged() {
  spans.textContent = "Espresso"
}

function addItem(){
    const li = document.createElement("li");
    // const text = document.createTextNode("Butter");
    li.textContent = "Butter";
    // li.appendChild(text);
    ulList.appendChild(li);
}

function removeElement(){
      ulList1.lastElementChild.classList.toggle("hidden")
      
}



btn.addEventListener("click", clickMe);
btn1.addEventListener("click", changeColor);
btn2.addEventListener("click", orderChanged);
btn3.addEventListener("click", addItem);
btn4.addEventListener("click", removeElement);