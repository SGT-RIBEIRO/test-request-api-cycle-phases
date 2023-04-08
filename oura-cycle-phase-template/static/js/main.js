const messageForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
messageForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const payload = {
        username: emailInput.value,
        password: passwordInput.value
    }

    console.log(JSON.stringify(payload));

    const response = await fetch('http://13.59.99.183:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        mode: 'no-cors'
    });

    if (response.status === 200) {
        const data = await response.json();
        alert(
            "Login realizado com sucesso!"
        );
    }
});



