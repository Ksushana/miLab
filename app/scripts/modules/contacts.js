import {LICENSING_EMAIL} from '../constants';

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
      return '';
    },
    body() {
      let {message} = getFormData(inquireForm);
      return message || '';
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
  const form = document.getElementById('contacts-form');
  if (form) {
    processForm(form);
  }
});
