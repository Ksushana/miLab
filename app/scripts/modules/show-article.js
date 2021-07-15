(function() {
  let accordionButtons = document.getElementsByClassName('publications__more');
  for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function() {
        this.classList.toggle('rotate');
        let accordionContent = this.nextElementSibling;

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
        }
          else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
    });
  }
})();

