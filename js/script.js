var link = document.querySelector(".search-link");
var popup = document.querySelector(".form-search");

  popup.classList.remove("form-search-show");
  console.log("link");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-search-show");
    console.log("tutu");
});


