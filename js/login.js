document.addEventListener('DOMContentLoaded', () => {
  initLoginForm();
  initForgotPassword();
  initGoogleLogin();
});

function initLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  const { showToast, setFieldError, isValidEmail } = window.CyberM;
  const submitBtn = document.getElementById('submitLogin');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    let valid = true;

    if (!isValidEmail(email)) {
      setFieldError('field-login-email', true);
      valid = false;
    } else {
      setFieldError('field-login-email', false);
    }

    if (!password) {
      setFieldError('field-login-password', true);
      valid = false;
    } else {
      setFieldError('field-login-password', false);
    }

    if (!valid) {
      showToast('Please fix the highlighted fields.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Log in →';
      showToast('Signed in successfully.');
      console.log('Login attempt:', { email });
    }, 900);
  });
}

function initForgotPassword() {
  const forgotPassword = document.getElementById('forgotPassword');
  if (!forgotPassword) return;

  const { showToast } = window.CyberM;

  forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const emailField = document.getElementById('loginEmail');
    const email = emailField ? emailField.value.trim() : '';
    if (email) {
      showToast(`Password reset link sent to ${email}.`);
    } else {
      showToast('Enter your email above first, then click "Forgot password?".', 'error');
      emailField && emailField.focus();
    }
  });
}

function initGoogleLogin() {
  const googleLogin = document.getElementById('googleLogin');
  if (!googleLogin) return;

  const { showToast } = window.CyberM;

  googleLogin.addEventListener('click', () => {
    showToast('Connecting to Google...');
    setTimeout(() => {
      showToast('Google sign-in is not yet configured on this demo.', 'error');
    }, 1200);
  });
}
