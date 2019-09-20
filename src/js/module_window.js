window.onload = function() {
let loginBlock = document.getElementById('login-block');

let loginBodyBlock = document.getElementById('body-block');
let forgotBlock = document.getElementById('forgot-block');
let signUpBlock = document.getElementById('signup-block');

let loginButton = document.getElementById('login');

let backLoginButton = document.getElementById('back-to-login');

let forgotButton = document.getElementById('forgot-btn');
let signUpButton = document.getElementById('signup-btn');

let closeLoginButton = document.getElementById('close');
let closeForgotButton = document.getElementById('close-forgot-btn');
let closeSignUpButton = document.getElementById('close-signup-btn');

window.showBackDrop = () => {
    loginBlock.style.display = "block";
    loginBodyBlock.style.display = "block";
    forgotBlock.style.display = "none";
    signUpBlock.style.display = "none";
}

closeLoginButton.onclick = () => {
    loginBlock.style.display = "none";
}

forgotButton.onclick = () => {
    loginBodyBlock.style.display = "none";
    forgotBlock.style.display = "block";
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

backLoginButton.onclick = () => {
    forgotBlock.style.display = "none";
    loginBodyBlock.style.display = "block";
}

window.onclick = (event) => {
    if (event.target == loginBlock) {
        loginBlock.style.display = "none";
    }
}


}

