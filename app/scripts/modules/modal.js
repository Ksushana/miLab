(function() {
  const btn = document.querySelector('.services__form-btn')
  if (btn) {
    var ESC = 27;
    const modal = document.querySelector('.modal')
    const darken = document.querySelector('.darken')
    const bodyScrollLock = require('body-scroll-lock');
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;

    function openModal() {
      darken.classList.add('darken-show')
      btn.classList.add('btn-hide')
      modal.classList.add('modal-show')
      disableBodyScroll(modal);
    }

    function closeModal() {
      darken.classList.remove('darken-show')
      btn.classList.remove('btn-hide')
      modal.classList.remove('modal-show')
      enableBodyScroll(modal);
    }

    btn.addEventListener('click', openModal)
    darken.addEventListener('click', closeModal)
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === ESC) {
        if (darken.classList.contains("darken-show")) {
          evt.preventDefault();
          darken.classList.remove('darken-show')
          btn.classList.remove('btn-hide')
          modal.classList.remove('modal-show')
          enableBodyScroll(modal);
        }
      }
    });
  }
})();