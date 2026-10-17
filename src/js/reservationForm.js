/**
 * Table Reservation & Concierge Enquiry Form Module
 * Real-time field validation, date constraints, and verified pre-launch feedback state.
 */

export function initReservationForm() {
  const form = document.getElementById('enquiryForm');
  const dateInput = document.getElementById('enquiryDate');
  const submitBtn = document.getElementById('enquirySubmitBtn');
  const feedbackBox = document.getElementById('formFeedback');

  if (!form) return;

  // 1. Constrain Date Picker to today or future date
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // 2. Form Submission Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Field extractions
    const name = form.elements['guestName']?.value.trim() || '';
    const contact = form.elements['guestContact']?.value.trim() || '';
    const email = form.elements['guestEmail']?.value.trim() || '';
    const date = form.elements['enquiryDate']?.value || '';
    const time = form.elements['enquiryTime']?.value || '';
    const partySize = form.elements['partySize']?.value || '';
    const experience = form.elements['experiencePreference']?.value || 'indoor';
    const notes = form.elements['specialNotes']?.value.trim() || '';

    // Validation
    if (!name || name.length < 2) {
      showError('Please enter your full name (minimum 2 characters).');
      form.elements['guestName']?.focus();
      return;
    }

    if (!contact || contact.length < 8) {
      showError('Please provide a valid 10-digit mobile number or WhatsApp contact.');
      form.elements['guestContact']?.focus();
      return;
    }

    if (!date) {
      showError('Please select a requested date for your dining enquiry.');
      form.elements['enquiryDate']?.focus();
      return;
    }

    // Set Loading State
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner" aria-hidden="true"></span>
      <span>Processing Enquiry...</span>
    `;

    // Simulate submission delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;

      const refCode = `ZR8-ENQ-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      const experienceLabel =
        experience === 'rooftop'
          ? 'Sky Pavilion (Rooftop Dining)'
          : 'The Main Dining Room (Indoor Restaurant)';

      showSuccess(`
        <div class="feedback-headline">Table Enquiry Logged Successfully</div>
        <p class="feedback-body">
          Thank you, <strong>${escapeHtml(name)}</strong>. We have logged your enquiry for 
          <strong>${escapeHtml(partySize)}</strong> at <strong>${escapeHtml(experienceLabel)}</strong> 
          on <strong>${escapeHtml(date)}</strong> (${escapeHtml(time)}).
        </p>
        <div class="feedback-meta">
          <div>Reference Identifier: <strong style="color: var(--color-champagne-gold);">${refCode}</strong></div>
          <div style="margin-top: 6px; font-style: italic;">
            Note: This enquiry is operating in pre-launch demo mode. No automatic table guarantee or payment is finalized until direct concierge confirmation.
          </div>
        </div>
      `);

      form.reset();
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }
    }, 900);
  });

  function showError(msg) {
    if (!feedbackBox) return;
    feedbackBox.className = 'form-feedback form-feedback--error is-visible';
    feedbackBox.setAttribute('role', 'alert');
    feedbackBox.innerHTML = `<strong>Attention Required:</strong> ${escapeHtml(msg)}`;
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function showSuccess(html) {
    if (!feedbackBox) return;
    feedbackBox.className = 'form-feedback form-feedback--success is-visible';
    feedbackBox.setAttribute('role', 'status');
    feedbackBox.innerHTML = html;
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
