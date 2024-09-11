document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.querySelector('.login-btn');
    const inputs = document.querySelectorAll('input');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            // Simulate login - replace with actual login logic
            loginBtn.textContent = 'Signing In...';
            loginBtn.disabled = true;
            setTimeout(() => {
                alert('Login successful!');
                loginBtn.textContent = 'Sign In';
                loginBtn.disabled = false;
                // Reset form
                loginForm.reset();
                inputs.forEach(input => {
                    input.nextElementSibling.classList.remove('active');
                });
            }, 2000);
        } else {
            // Shake animation for invalid input
            loginForm.style.animation = 'shake 0.5s ease';
            setTimeout(() => {
                loginForm.style.animation = '';
            }, 500);
        }
    });

    // Floating label effect
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.nextElementSibling.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.nextElementSibling.classList.remove('active');
            }
        });
    });

    // Subtle hover effect for inputs
    inputs.forEach(input => {
        input.addEventListener('mouseover', () => {
            input.style.transition = 'all 0.3s ease';
            input.style.transform = 'translateY(-2px)';
            input.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
        input.addEventListener('mouseout', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = 'none';
        });
    });
});