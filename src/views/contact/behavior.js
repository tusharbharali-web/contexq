// Generated from public/html/contact (2).html.
// The original page scripts, unchanged, wrapped so they can run inside the
// React view: `cq` supplies window/document/timers that are scoped to the
// view and cleaned up when it unmounts (see src/views/_runtime/env.ts).
/* eslint-disable */

export default function init(cq) {
  return (function ({ window, document, location, history, self, top, parent, globalThis, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame, cancelAnimationFrame, IntersectionObserver, ResizeObserver, MutationObserver, addEventListener, removeEventListener, onReady }) {
    {
      // ---- page script ----
      try {
const form=document.getElementById('contact-form');
// Set the _next return URL so FormSubmit redirects back here after submission
try { document.getElementById('next-url').value = window.location.origin + '/contact?submitted=1'; } catch(e){}

// Block submit until Cloudflare Turnstile has issued a token
form.addEventListener('submit', function(e){
  const tokenField = form.querySelector('[name="cf-turnstile-response"]');
  if (!tokenField || !tokenField.value) {
    e.preventDefault();
    alert('Please complete the security check before submitting.');
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
