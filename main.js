var headerSpan = document.querySelector(".js-header-span")
var inputName = document.querySelector(".js-input-text")
var nameButton = document.querySelector(".js-name-dog")

nameButton.addEventListener("click", function(e) {
 e.preventDefault()
 headerSpan.innerText = inputName.value
inputName.value = ""
})