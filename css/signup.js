document.addEventListener('DOMContentLoaded', () => {
  initRolePicker();
  initSignupForm();
});

function initRolePicker() {
  const roleGrid = document.getElementById('roleGrid');
  if (!roleGrid) return;

  roleGrid.querySelectorAll('.role-option').forEach((option) => {
    option.addEventListener('click', () => {
      option.classList.toggle('selected');
    });
  });
}

function initSignupForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  const { showToast, setFieldError, isValidEmail } = window.CyberM;
  const submitBtn = document.getElementById('submitSignup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('signupPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    let valid = true;

    if (!fullname) {
      setFieldError('field-fullname', true);
      valid = false;
    } else {
      setFieldError('field-fullname', false);
    }

    if (!isValidEmail(email)) {
      setFieldError('field-email', true);
      valid = false;
    } else {
      setFieldError('field-email', false);
    }

    if (!username) {
      setFieldError('field-username', true);
      valid = false;
    } else {
      setFieldError('field-username', false);
    }

    if (!password || password.length < 8) {
      setFieldError('field-password', true);
      valid = false;
    } else {
      setFieldError('field-password', false);
    }

    if (!agreeTerms) {
      setFieldError('field-terms', true);
      valid = false;
    } else {
      setFieldError('field-terms', false);
    }

    if (!valid) {
      showToast('Please fix the highlighted fields.', 'error');
      return;
    }

    const selectedRoles = Array.from(document.querySelectorAll('.role-option.selected'))
      .map((el) => el.dataset.role);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Creating account...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Create account →';
      showToast(`Welcome, ${fullname.split(' ')[0]}! Account created.`);
      form.reset();
      document.querySelectorAll('.role-option.selected').forEach((el) => el.classList.remove('selected'));
      console.log('New account:', { fullname, email, username, roles: selectedRoles });
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1400);
    }, 900);
  });
}
