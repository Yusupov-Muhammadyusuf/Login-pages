document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const joinBtn = document.querySelector('.join');

    joinBtn.addEventListener('click', function() {
        if (email.value.trim() === '') {
            email.style.border = '1px solid red';
            emailError.textContent = 'Please enter your email address.'; 
        } else {
            email.style.border = '';
        }

        if (password.value.trim() === '') {
            password.style.border = '1px solid red';
            passwordError.textContent = 'Please enter your password.';
        } else {
            password.style.border = '';
        }
    })
})
