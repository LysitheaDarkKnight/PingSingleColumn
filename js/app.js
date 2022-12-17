const notify = document.querySelector('.btn');
const email = document.querySelector('.email');
const input = document.querySelector('#input');
const msg = document.querySelector('.message');


notify.addEventListener('click', e => {
    validateInputs();

    e.preventDefault();
});

function setError (message) {
    msg.innerText = message;
    msg.classList.add('error');
    msg.classList.remove('success');
    input.style.borderColor = '#EF5350'
}

function setSuccess (message) {
    msg.innerText = message;
    msg.classList.add('success');
    msg.classList.remove('error');
    input.style.borderColor = '#28a745';
};

function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
        setError('Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError('Provide a valid email address');
    } else {
        setSuccess('Notification Sent!');
    }

};
