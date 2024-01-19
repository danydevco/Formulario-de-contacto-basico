document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!name.trim().length > 3 || !emailRegex.test(email) || !message) {
            alert('Por favor, rellene todos los campos.');
        } else {
            alert('Gracias por contactarnos, pronto nos pondremos en contacto con usted.');
            document.querySelector('form').reset()
        }

    });
});
