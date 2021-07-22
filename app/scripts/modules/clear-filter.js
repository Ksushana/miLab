(function() {
  var clearBtn = document.querySelector(".services__clear button");
  var form = document.querySelector(".services__form");
  if(!clearBtn) {
    return;
  }

  var clearFilter = function() {
    form.reset();
  }
  clearBtn.addEventListener("click", clearFilter)
})();