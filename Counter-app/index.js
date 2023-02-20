const numberEl = document.querySelector(".number-el")
const decreaseEl = document.querySelector(".decrease-el")
const resetEl = document.querySelector(".reset-el")
const increaseEl = document.querySelector(".increase-el")
count = 0

//event listeners to increase, descrease and reset the counter

decreaseEl.addEventListener("click", () =>{
    count -= 1
    numberEl.textContent = count 
    changeColor()
})

resetEl.addEventListener("click", () =>{
    count = 0
    numberEl.textContent = count
    changeColor()
})

increaseEl.addEventListener("click", () =>{
    count += 1
    numberEl.textContent = count  
    changeColor()
})

//a function to change the color of the counter number based on whether it's a positive or negative number or a zero

function changeColor() {
    if(count < 0) {
        numberEl.style.color = "red"
    } else if(count > 0){
        numberEl.style.color = "green"
    } else {
        numberEl.style.color = "black"
    }
}