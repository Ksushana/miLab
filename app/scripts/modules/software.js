(function () {
  let licenseType = 'academic';

  const parts = {
    subject() {
      return 'MiXCR Pro Trial Request';
    },
    body() {
      return `Hi MiLaboratories,

I would like to enquire ${licenseType} license.

Best,`
    }
  };

  function buildLinkQuery() {
    return Object.keys(parts).map((name) => `${name}=${encodeURIComponent(parts[name]())}`).join('&');
  }

  function updateLinks() {
    document.querySelectorAll('.pricing-block__btn').forEach((el) => {
      el.setAttribute('href', 'mailto:licensing@milaboratory.com?' + buildLinkQuery());
    })
  }

  function processLicenseTypeForm(form) {
    updateLinks();

    form.addEventListener('click', (e) => {
      e.stopPropagation();
      form.querySelectorAll('input[type=radio]:checked').forEach((c) => {
        licenseType = c.getAttribute('id');
        updateLinks();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    const form = document.getElementById('license-type-switch-form');
    if (form) {
      processLicenseTypeForm(form);
    }
  });
})();
