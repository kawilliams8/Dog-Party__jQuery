// var headerSpan = document.querySelector(".js-header-span")
// var inputName = document.querySelector(".js-input-text")
// var nameButton = document.querySelector(".js-name-dog")

// nameButton.addEventListener("click", function(e) {
//  e.preventDefault()
//  headerSpan.innerText = inputName.value
// inputName.value = ""
// })

// An overly complicated first attempt at JQuery //

$(document).ready(function() {
  
  var $headerSpan = $(".js-header-span"); //Or by the lone span element
  var $inputName = $(".js-input-text"); //Or by the lone input element
  var $nameButton = $(".js-name-dog"); //Or by the lone button element

console.log('ready'); //Indicates that file is loading, we are inside function
console.log($headerSpan.html()); //Gets from the DOM, but we need to set

  $nameButton.on('click', function(e) {
    e.preventDefault();
    let newName = $inputName.val();
    console.log(newName); //Variable holds the new name string
    $headerSpan.html(newName); //Takes a string as a parameter to become a 'setter', which can be created in a function or contain markup
    $inputName.val(""); //Sets the value to an empty string
  })

});