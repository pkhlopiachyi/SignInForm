window.onload = function() {
    let email = document.getElementById('email');
    let passwd = document.getElementById('passwd');
    let forgotEmail = document.getElementById('forgot-email');

    let errMes = document.getElementById('err-message');
    let errBlock = document.getElementById('error-block');

    let loginSendButton = document.getElementById('login-send');
    let forgotSendButton = document.getElementById('forgot-send-btn');

    let validEmail = false;
    let validPasswd = false;

    let emailSignUp = document.getElementById('email-signup');
    let passwdSignUp = document.getElementById('passwd-signup');
    console.log(passwdSignUp);
    let passwdSignUpConfirm = document.getElementById('passwd-signup-confirm');

    let errMesPasswd = document.getElementById('err-message');
    let errMesPasswdBlock = document.getElementById('error-signup-block');
    let errMesPasswdConfirm =document.getElementById('err-message-confirm');
    let errMesPasswdConfirmBlock = document.getElementById('error-signup-confirm-block');

    let createButton = document.getElementById("signup-send");

    let validEmailSignUp = false;
    let validPasswdSignUp = false;
    let validPasswdSignupConfirm = false;

    window.onFocusInput = (borderBlock) => {
        document.getElementById(borderBlock).style.border = "1px solid #E84A5F";
    }

    window.onBlurInput = (borderBlock) => {
        document.getElementById(borderBlock).style.border = "1px solid rgba(238, 238, 238, 0.2)";
    }

    email.onkeyup = () => {

        validEmail = testEmail(email);
        enableLoginButton(validPasswd, validEmail);
    }

    forgotEmail.onkeyup = () => {
        let res = testEmail(forgotEmail);
        console.log(res);
        if (res) {
            enableButton(forgotSendButton);
        } else {
            disableButton(forgotSendButton);
        }
    }

    function testEmail(email) {
        let str = email.value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (str.match(re)) {
            return true;
        } else {
            return false;
        }
    }

    passwd.onkeyup = () => {
        errBlock.style.display = "none";
        validPasswd = testPasswd(passwd, errMes, errBlock);
        enableLoginButton(validPasswd, validEmail);
    }

    function testPasswd(input, errorMessage, errorBlock) {
        let str = input.value;
        console.log(input);
        console.log(errorMessage);
        console.log(errorBlock);
        if (
            str.match(/[a-z]/g)) {
            if (str.match(/[A-Z]/g)) {
                if (str.match(/[0-9]/g)) {
                   if (str.match(/[^a-zA-Z\d]/g)) {
                        if (str.length >= 8) {
                            return true;
                        } else {
                            animation(errorMessage, errorBlock,"Password length shuld be at least 8 symbols");
                            return false;
                        }
                    } else {
                        animation(errorMessage, errorBlock, "Need at least 1 special character");
                        return false;
                    }
                } else {
                    animation(errorMessage, errorBlock, "Need at least 1 number");
                    return false;
                }
            } else {

                animation(errorMessage, errorBlock, "Need at least 1 uppercase character");
                return false;
            }
        } else {
            animation(errorMessage, errorBlock, "Need at least 1 lowercase character");
            return false;
        }
    }

    function signUpValid() {
        if(validEmailSignUp && validPasswdSignUp && validPasswdSignUpConfirm) {
            enableButton(createButton);
        } else {
            disableButton(createButton);
        }
    }

    emailSignUp.onkeyup = () => {
        validEmailSignUp = testEmail(emailSignUp);
        signUpValid();
    }

    passwdSignUp.onkeyup = () => {
        validPasswdSignUp = testPasswd(passwdSignUp, errMesPasswd, errMesPasswdBlock);
        signUpValid();
    }

    passwdSignUpConfirm.onkeyup = () => {
        let pass = paswdSignUp.value;
        let passConfirm = passwdSignUpConfirm.value;

        if(pass === passConfirm) {
            validPasswdSignUpConfirm = true;
        } else {
            animation(errMesPasswdConfirm, errMesPasswdConfirmBlock, "Passwords don't equal")
        }

        signUpValid();
    }

    function animation(elem, block, message) {
        elem.innerHTML = message;
        fadeIn(block);
        setTimeout(() => {
            fadeOut(block);
        }, 5000);
    }

    function fadeOut(el){
      el.style.opacity = 1;

      (function fade() {
        if ((el.style.opacity -= .1) < 0) {
          el.style.display = "none";
        } else {
          setTimeout(fade, 40);
        }
      })();
    }

    function fadeIn(el){
      el.style.opacity = 0;
      el.style.display = "flex";

      (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
          el.style.opacity = val;
          setTimeout(fade, 40);
        }
      })();
    }

    function enableLoginButton(valPasswd, valEmail) {

        if(valEmail && valPasswd) {
            enableButton(loginSendButton);
        } else {
            disableButton(loginSendButton);
        }
    }

    function enableButton(button) {
        button.disabled = false;
        button.style.backgroundColor = "#E84A5F";
        button.style.cursor = "pointer";
    }

    function disableButton(button) {
        button.disabled = true;
        button.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
        button.style.cursor = "not-allowed";
    }
}

