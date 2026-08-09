const form = document.querySelector('[data-booking-form]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const dateGrid = document.querySelector('[data-date-grid]');
const steps = [...document.querySelectorAll('[data-step]')];
const progressItems = [...document.querySelectorAll('[data-progress]')];
const success = document.querySelector('[data-booking-success]');
let currentStep = 1;

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
});

const longDateFormatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

function buildDates() {
  const today = new Date();
  let added = 0;
  let cursor = 2;

  while (added < 4) {
    const date = new Date(today);
    date.setDate(today.getDate() + cursor);
    cursor += 1;

    if (date.getDay() === 0) continue;

    const label = document.createElement('label');
    const input = document.createElement('input');
    const visual = document.createElement('span');
    const day = document.createElement('strong');
    const month = document.createElement('small');

    input.type = 'radio';
    input.name = 'date';
    input.value = date.toISOString().slice(0, 10);
    input.required = true;
    day.textContent = date.getDate();
    month.textContent = dateFormatter.format(date).replace(String(date.getDate()), '').trim();
    visual.append(day, month);
    label.append(input, visual);
    dateGrid.append(label);

    added += 1;
  }
}

function setStep(nextStep) {
  currentStep = nextStep;
  steps.forEach((step) => {
    const isActive = Number(step.dataset.step) === currentStep;
    step.hidden = !isActive;
    step.classList.toggle('is-active', isActive);
  });

  progressItems.forEach((item) => {
    const number = Number(item.dataset.progress);
    item.classList.toggle('is-active', number === currentStep);
    item.classList.toggle('is-complete', number < currentStep);
  });

  updateSummary();
  const activeStep = steps.find((step) => Number(step.dataset.step) === currentStep);
  const heading = activeStep?.querySelector('h3');
  if (heading) {
    heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }
}

function selected(name) {
  return form.elements[name]?.value?.trim() || '';
}

function getReadableDate() {
  const dateValue = selected('date');
  const timeValue = selected('time');
  if (!dateValue || !timeValue) return 'Not selected';

  const date = new Date(`${dateValue}T12:00:00`);
  return `${longDateFormatter.format(date)} at ${timeValue}`;
}

function updateSummary() {
  const service = selected('service') || 'Not selected';
  const readableDate = getReadableDate();
  document.querySelector('[data-summary-service]').textContent = service;
  document.querySelector('[data-summary-date]').textContent = readableDate;
  document.querySelector('[data-review-service]').textContent = service;
  document.querySelector('[data-review-date]').textContent = readableDate;
  document.querySelector('[data-review-location]').textContent = selected('location') || 'Not selected';
}

function validateStep(stepNumber) {
  const error = document.querySelector(`[data-error="${stepNumber}"]`);
  let message = '';

  if (stepNumber === 1 && !selected('service')) {
    message = 'Choose a style to continue.';
  }

  if (stepNumber === 2 && (!selected('date') || !selected('time'))) {
    message = 'Choose both a provisional date and time.';
  }

  if (stepNumber === 3) {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'location'];
    const missing = fields.some((field) => !selected(field));
    const emailInput = form.elements.email;
    if (missing) message = 'Complete all required contact and location fields.';
    else if (!emailInput.checkValidity()) message = 'Enter a valid email address.';
  }

  if (error) error.textContent = message;
  return !message;
}

form.addEventListener('click', (event) => {
  const next = event.target.closest('[data-next]');
  const back = event.target.closest('[data-back]');

  if (next && validateStep(currentStep)) setStep(Math.min(currentStep + 1, 4));
  if (back) setStep(Math.max(currentStep - 1, 1));
});

form.addEventListener('change', updateSummary);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  steps.forEach((step) => {
    step.hidden = true;
  });
  success.hidden = false;
  success.focus();
});

document.querySelector('[data-restart]').addEventListener('click', () => {
  form.reset();
  success.hidden = true;
  setStep(1);
});

document.querySelectorAll('[data-service-pick]').forEach((button) => {
  button.addEventListener('click', () => {
    const input = form.querySelector(`input[name="service"][value="${button.dataset.servicePick}"]`);
    if (input) input.checked = true;
    success.hidden = true;
    setStep(1);
    updateSummary();
    document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => input?.focus(), 500);
  });
});

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
  nav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.querySelector('.sr-only').textContent = 'Open navigation';
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  });
});

buildDates();
updateSummary();
