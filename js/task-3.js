const input = document.getElementById("name-input")
const userName = document.getElementById("name-output")
input.addEventListener("input", () => {
    userName.textContent = input.value.trim() === "" ? "Anonymous" : input.value
})