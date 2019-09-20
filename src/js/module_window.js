let loginBlock = document.getElementById('login-block');

let loginBodyBlock = document.getElementById('body-block');
let forgotLoginBlock = document.getElementById('forgot-block');
let signUpBlock = document.getElementById('signup-block');

let loginButton = document.getElementById('login');

let forgotButton = document.getElementById('forgot-btn');
let signUpButton = document.getElementById('signup-btn');

let closeLoginButton = document.getElementById('close');
let closeForgotButton = document.getElementById('close-forgot-btn');
let closeSignUpButton = document.getElementById('close-signup-btn');

loginButton.onclick = () => {
    loginBlock.style.display = "block";
    loginBodyBlock.style.display = "block";
    forgotLoginBlock.style.display = "none";
    signUpBlock.style.display = "none";
}

closeLoginButton.onclick = () => {
    loginBlock.style.display = "none";
}

forgotButton.onclick = () => {
    loginBodyBlock.style.display = "none";
    forgotLoginBlock.style.display = "block";
}

closeForgotButton.onclick = () => {
    loginBlock.style.display = "none";
}

signUpButton.onclick = () => {
    loginBodyBlock.style.display = "none";
    signUpBlock.style.display = "block";
}

closeSignUpButton.onclick = () => {
    loginBlock.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == loginBlock) {
        loginBlock.style.display = "none";
    }
}


