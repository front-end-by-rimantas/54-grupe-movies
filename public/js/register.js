const alertDOM = document.getElementById('error');
const formDOM = document.forms[0];
const emailDOM = document.getElementById('email');
const passwordDOM = document.getElementById('password');

if (formDOM) {
    formDOM.addEventListener('submit', event => {
        event.preventDefault();

        const data = {
            email: emailDOM.value,
            password: passwordDOM.value,
        };

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    });
}