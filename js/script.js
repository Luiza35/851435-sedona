var link = document.querySelector(".search-link");
var popup = document.querySelector(".form-search");
var form = popup.querySelector("form");
var date-arrival = popup.querySelector("[name=date-arrival]");
var date-departure = popup.querySelector("[name=date-departure]");
var quantity-adults = popup.querySelector("[name=quantity-adults]");
var quantity-children = popup.querySelector("[name=quantity-children]");



  popup.classList.remove("form-search-show");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-search-show");
});

	form.addEventListener("submit", function (evt) {
  	if (!date-arrival.value || !date-departure.value || !quantity-adults.value || !quantity-children.value) {
  	evt.preventDefault();
  	popup.classList.add("form-search-show-error");
  }
});


