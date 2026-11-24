// Generated from public/html/contact (2).html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */
import { submitLead } from '../../lib/leads/client';

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
const form=document.getElementById('contact-form');
const statusEl=document.getElementById('form-status');
const submitBtn=form.querySelector('button[type="submit"]');
function showStatus(text){ if(statusEl){ statusEl.textContent=text; statusEl.classList.toggle('show', !!text); } }

// Send the enquiry to /api/leads (our server). The server verifies Turnstile,
// adds location and source, and emails the team. Nothing is sent from the browser
// to third parties, and recipient addresses are not in the page.
form.addEventListener('submit', async function(e){
  e.preventDefault();
  if (!form.reportValidity()) return;
  const tokenField = form.querySelector('[name="cf-turnstile-response"]');
  if (!tokenField || !tokenField.value) {
    showStatus('Please complete the security check before submitting.');
    if (window.turnstile) window.turnstile.reset();
    return;
  }
  const v = (name) => ((form.elements[name] && form.elements[name].value) || '').trim();
  const country = v('country') === 'Other' ? v('country_other') : v('country');
  const interest = v('interest') === 'Other' ? v('interest_other') : v('interest');
  submitBtn.disabled = true;
  const label = submitBtn.textContent;
  submitBtn.textContent = 'Sending';
  showStatus('');
  const result = await submitLead({
    type: 'contact',
    name: (v('first') + ' ' + v('last')).trim(),
    email: v('email'),
    company: v('company'),
    country: country,
    interest: interest,
    message: v('message'),
    turnstileToken: tokenField.value,
    website: v('website'),
  });
  submitBtn.disabled = false;
  submitBtn.textContent = label;
  if (result.ok) {
    const card = form.parentElement;
    form.hidden = true;
    const done = document.createElement('div');
    done.className = 'form-done';
    done.setAttribute('role', 'status');
    done.innerHTML = '<h3>Thank you</h3><p>Your request has been sent. Our team will contact you at <strong></strong> shortly.</p>' + (result.reference ? '<p class="form-ref">Reference ' + result.reference + '</p>' : '');
    done.querySelector('strong').textContent = v('email');
    card.appendChild(done);
  } else {
    showStatus(result.error || 'We could not send your request. Please try again or email inquiry@contexq.com.');
    if (window.turnstile) window.turnstile.reset();
  }
});
document.querySelectorAll('[data-interest]').forEach(link=>link.addEventListener('click',()=>{const select=document.getElementById('interest');select.value=link.dataset.interest;select.dispatchEvent(new Event('change'));}));

// Reveal a free-text input when "Other" is chosen in a select
function wireOtherField(selectId, otherFieldId, otherInputId) {
  const sel = document.getElementById(selectId);
  const field = document.getElementById(otherFieldId);
  const input = document.getElementById(otherInputId);
  if (!sel || !field || !input) return;
  const toggle = () => {
    const show = (sel.value || '').trim().toLowerCase() === 'other';
    field.hidden = !show;
    input.required = show;
    if (show) setTimeout(() => input.focus(), 50); else input.value = '';
  };
  sel.addEventListener('change', toggle);
  toggle();
}
wireOtherField('country', 'country-other-field', 'country-other');
wireOtherField('interest', 'interest-other-field', 'interest-other');
      } catch (err) { console.error('[contact] page script error:', err); }
      return {  };
    }
  })(cq);
}
