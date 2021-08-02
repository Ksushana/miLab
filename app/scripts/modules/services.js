import {LICENSING_EMAIL} from '../constants';

function getSelected() {
  const servicesForm = document.getElementById('services-form');

  const selected = {};

  if (!servicesForm) {
    return selected;
  }

  const data = new FormData(servicesForm);

  for (const [name, value] of data.entries()) {
    const pref = name.split("#")[0] || '_';
    selected[pref] = (selected[pref] || []).concat(value);
  }

  return selected;
}

function getFormData(form) {
  const fd = new FormData(form);

  const data = {};

  for (const [name, value] of fd.entries()) {
    data[name] = value;
  }

  return data;
}


function buildLinkQuery(inquireForm) {
  const parts = {
    subject() {
      return 'MiXCR Pro Trial Request';
    },
    body() {
      const selected = getSelected();

      let {comment} = getFormData(inquireForm);

      if (comment.trim()) {
        comment = comment + '\n\n';
      }

      if (!Object.keys(selected).length) {
        return `Hi MiLaboratories,

I’m interested in your services.

${comment}Best,`
      }

      return `Hi MiLaboratories,

I’m interested in your services and the following features:

${Object.values(selected).map(p => `* ${p.join(', ')}`).join('\n')}

${comment}Best,`
    }
  };

  return Object.keys(parts).map((name) => `${name}=${encodeURIComponent(parts[name]())}`).join('&');
}

function processForm(inquireForm) {
  inquireForm.addEventListener('submit', (e) => {
    e.preventDefault();
    location.href = 'mailto:' + LICENSING_EMAIL + '?' + buildLinkQuery(e.target);
  })
}

document.addEventListener('DOMContentLoaded', function (event) {
  const form = document.getElementById('inquire-form');
  if (form) {
    processForm(form);
  }
});
