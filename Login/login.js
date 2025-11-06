const loginForm = document.getElementById('loginForm');
const searchForm = document.getElementById('searchForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const searchInput = document.getElementById('searchQuery');
const loginButton = document.getElementById('loginButton');
const searchButton = document.getElementById('searchButton');
const messageBox = document.getElementById('messageBox');
let isLoggedIn = false;

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === 'admin' && password === 'password') {
        isLoggedIn = true;
        messageBox.textContent = 'Login successful!';
        loginForm.style.display = 'none';
        searchForm.style.display = 'block';
    }   else {                                                              
        messageBox.textContent = 'Invalid username or password.';
    }
}
);
