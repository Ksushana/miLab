(function () {
  function buildLinkQuery(selected) {
    const parts = {
      subject() {
        return 'MiXCR Pro Trial Request';
      },
      body() {
        if (!selected.length) {
          return `Hi MiLaboratories,

I’m interested in your services.

Best,`
        }

        return `Hi MiLaboratories,

I’m interested in your services and the following features:

${selected.map(p => `* ${p}`).join('\n')}

Best,`
      }
    };

    return Object.keys(parts).map((name) => `${name}=${encodeURIComponent(parts[name]())}`).join('&');
  }

  function processForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      location.href = 'mailto:licensing@milaboratory.com?' + buildLinkQuery([...data.values()]);
    })
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    const form = document.getElementById('services-form');
    if (form) {
      processForm(form);
    }
  });
})();
