const boxes = document.getElementById("boxes")
const input = document.querySelector("[type=number]")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")

createBtn.addEventListener('click', (event) => {
  if(input.value >= 1 && input.value <= 100){
    event.preventDefault()
    createBoxes(input.value)
    input.value = ""
  }else{
    alert("Введите число от 1 до 100")
  }
})

destroyBtn.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
  boxes.innerHTML = ""
  let currentSize = 30
  for(let  i = 0; i < amount; i++){
      const color = getRandomHexColor()
      const newBox = document.createElement("div")
      newBox.style.backgroundColor = color
      newBox.style.width = `${currentSize}px`
      newBox.style.height = `${currentSize}px`
      boxes.insertAdjacentElement("beforeend", newBox)
      currentSize += 10
    }
}

function destroyBoxes(){
   boxes.innerHTML = ""
}