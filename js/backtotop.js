let mybutton = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}