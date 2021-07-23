(function() {
  var btn = document.querySelector(".about__show-news");
  var news = document.querySelector(".about__hidden");
  if(btn) {
    var showNews = function() {
      news.classList.toggle("show")
      btn.classList.toggle("show")
    }
    btn.addEventListener("click", showNews)
  }
})();