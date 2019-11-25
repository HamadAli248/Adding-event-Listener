const myHeading = document.getElementById("heading");
myHeading.addEventListener("click",()=>{
  myHeading.style.color = randomColors();
});

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
