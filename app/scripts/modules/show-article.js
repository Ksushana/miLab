(function() {
  var openBtns = document.querySelectorAll("..publications__more");
  var article = document.querySelectorAll(".publications__article");

  var toggleArticle = function() {
    for (var i = 0; i < openBtns.length; i++) {
      openBtns[i].classList.toggle('rotate');
    }
  }

  openBtn.addEventListener("click", toggleArticle)
})();