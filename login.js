document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !password) {
        errorMessage.textContent = 'Please fill in all fields.';
    } else {
        errorMessage.textContent = '';
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page
    }
});
