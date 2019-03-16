var headerSpan = document.querySelector("#header-span")
var inputName = document.querySelector("#input-text")
var nameButton = document.querySelector("#name-dog")

nameButton.addEventListener("click", function(e) {
 e.preventDefault()
 headerSpan.innerText = inputName.value
inputName.value = ""
})