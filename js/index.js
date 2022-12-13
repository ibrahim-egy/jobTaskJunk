

function validateUsername() {

    
    const username = document.querySelector(".input-name").value;
    if (username.length < 5 || username.length > 15) {
        error(true, 0,"*Username must consist of 5 to 15 characters.");
        return false
    } else if (!isNaN(username[0]) || !isNaN(username[username.length - 1])) {
        error(true, 0,"*No numbers at the beginning or the end");
        return false
    } else if (!/^[A-Za-z0-9]*$/.test(username)) {
        error(true, 0,"*Only letters and numbers are allowed")
        return false
    }
    else {
        error(false, 0)
        return true
    }

}


function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const email = document.querySelector(".input-email").value;

    if (!validRegex.test(email)) {
        error(true, 1,"*Email must be in a valid format")
        return false
    } else {
        error(false, 1)
        return true
    }
}


function validatePassword () {

    const password = document.querySelector(".input-password").value;

    if (password.length < 8) {
        error(true, 2, "*Password must be at least 8 characters");
        return false
    } else {
        error(false, 2)
        return true
    }
}


function validateConfirmPassword () {
    const confirmPassword = document.querySelector(".input-confirm-Password").value;
    const password = document.querySelector(".input-password").value;

    if (password !== confirmPassword ) {
        error(true, 3, "*Password miss match");
        return false
    } else {
        error(false, 3);
        return true
    }
}

function error (show, index, message="") {
    const divWrap = document.querySelectorAll('.input-wrap')[index];
    const errorSpan = document.querySelectorAll('.error')[index];
    const icon = document.querySelectorAll('.input-wrap i')[index];
    const button = document.querySelector(".btn");
    if (show === true) {
        errorSpan.textContent = message;
        divWrap.classList.add("invalid");
        divWrap.classList.remove("valid");
        icon.classList.add("invalid");
        icon.classList.remove("valid");
        divWrap.appendChild(errorSpan);
        button.disabled = true;
        button.classList.add("disabled")
    } else {
        errorSpan.textContent=message;
        divWrap.classList.remove('invalid');
        divWrap.classList.add('valid');
        icon.classList.remove("invalid");
        icon.classList.add("valid");
        button.disabled = false;
        button.classList.remove("disabled")


    }
    
}

function sendData() {



    const username = document.querySelector(".input-name").value;
    const email = document.querySelector(".input-email").value;
    const password = document.querySelector(".input-password").value;
    const confirmPassword = document.querySelector(".input-confirm-Password").value;
    localStorage.setItem("email", email);

    fetch("https://goldblv.com/api/hiring/tasks/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }),
        mode: 'no-cors'
    }).then(data => {
        localStorage.setItem("email", email);

    }).catch (error => {
        console.log(error);
    })
}

fetch("https://goldblv.com/api/hiring/tasks/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify({
            username: 'username',
            email: 'email@aksjd.com',
            password: 'password',
            password_confirmation: 'password'
        }),
        mode: 'no-cors'
    }).then(data => {
        console.log(data);
        
    }).catch (error => {
        console.log(error);
    })