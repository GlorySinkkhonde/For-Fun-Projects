const body = document.getElementsByTagName("body")
const btn = document.querySelector(".btn")
const colorName = document.querySelector(".bg-color-name")

btn.addEventListener("click", () =>{

    //getting random colors
    let randomColor = colorList[Math.floor(Math.random() * colorList.length)]
    color = randomColor.color

    //changing background color to random color
    document.body.style.backgroundColor = color;

    //changing color name to random color name

    colorName.textContent = randomColor.name

    //changing color name text color to randomColor color
    colorName.style.color = randomColor.color;
})