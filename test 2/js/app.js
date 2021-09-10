// UI 
const column = document.getElementsByClassName("column");
const btn = document.getElementById("lucky");

// 
var random = 0;


btn.addEventListener("click", () => {
    console.log("hay");
    let startspring = setInterval(() => {
        random = Math.floor(Math.random() * 9);
        console.log(random);
        //add or remove css class border for column
        column[random].classList.toggle("border");
    }, 100);
    let stopspring = setTimeout(() => {
        window.alert("hay");
        clearInterval(startspring);
        //if spring stop, columns has border and then remove border
        for (let index = 0; index < column.length; index++) {
            column[index].classList.remove("border");
        }
        //last random number 
        column[random].classList.add("border");
    }, 4 * 1000);
})