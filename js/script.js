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

popup.addEventListener("submit", function (evt) {
	if (!datearrival.value || !datedeparture.value || !quantityadults.value || !quantitychildren.value) {
		evt.preventDefault();
		popup.classList.remove("form-search-show-error"); 
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("form-search-show-error");
	}
});
