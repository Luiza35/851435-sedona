var link = document.querySelector(".search-link");
var popup = document.querySelector(".form-search");

var datearrival = popup.querySelector("[name=date-arrival]");
var datedeparture = popup.querySelector("[name=date-departure]");
var quantityadults = popup.querySelector("[name=quantity-adults]");
var quantitychildren = popup.querySelector("[name=quantity-children]");



  popup.classList.remove("form-search-show");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-search-show");
});


