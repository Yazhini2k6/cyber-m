function toggleDarkMode() {
    const body = document.body;
    // Check current theme and swap
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}