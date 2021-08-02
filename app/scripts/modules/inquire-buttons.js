import {LICENSING_EMAIL} from '../constants';

function buildLinkQuery({subject}) {
  const parts = {
    subject() {
      return subject;
    },
    body() {
      return `Hi MiLaboratories,

I am interested in your ${subject}.

Could you provide more details?

Best,`
    }
  };
  return Object.keys(parts).map((name) => `${name}=${encodeURIComponent(parts[name]())}`).join('&');
}

function updateLinks() {
  document.querySelectorAll('button.inquire-button').forEach((el) => {
    const subject = el.getAttribute('data-subject') || 'unknown';
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      location.href = 'mailto:' + LICENSING_EMAIL + '?' + buildLinkQuery({subject});
    })
  })
}

document.addEventListener('DOMContentLoaded', updateLinks);
