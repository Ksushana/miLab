(function () {
  function buildLinkQuery(data) {
    const parts = {
      subject() {
        return 'MiXCR Pro Trial Request';
      },
      body() {
        const selected = {};

        for (const [name, value] of data.entries()) {
          const pref = name.split("#")[0] || '_';
          selected[pref] = (selected[pref] || []).concat(value);
        }

        if (!Object.keys(selected).length) {
          return `Hi MiLaboratories,

I’m interested in your services.

Best,`
        }

        return `Hi MiLaboratories,

I’m interested in your services and the following features:

${Object.values(selected).map(p => `* ${p.join(', ')}`).join('\n')}

Best,`
      }
    };

    return Object.keys(parts).map((name) => `${name}=${encodeURIComponent(parts[name]())}`).join('&');
  }

  function processForm(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      location.href = 'mailto:licensing@milaboratory.com?' + buildLinkQuery(new FormData(e.target));
    })
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    const form = document.getElementById('services-form');
    if (form) {
      processForm(form);
    }
  });
})();
