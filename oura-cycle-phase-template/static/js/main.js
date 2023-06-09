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
    
//      let xhr = new XMLHttpRequest();

//     xhr.open("POST", "https://13.59.99.183:3000/login")
//     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     xhr.send(JSON.stringify(payload))

    const response = await fetch('https://oura-cycle-phases.link/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
        mode: 'cors',
        //credentials: 'include'
    });

    if (response.status === 200) {
        const data = await response.json();
        console.log("DATA: ", data)
        console.log("COOKIE: ", document.cookie)
        alert(
            "Login realizado com sucesso!"
        );
    }
});



