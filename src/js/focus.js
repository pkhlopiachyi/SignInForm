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
            forgotSendButton.disabled = false;
            forgotSendButton.style.background = "#E84A5F";
            forgotSendButton.style.cursor = "pointer";
        } else {
            forgotSendButton.disabled = true;
            forgotSendButton.style.background = "rgba(232, 74, 95, 0.5)";
            forgotSendButton.style.cursor = "not-allowed";
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
    
    window.onkeyup = () => {
        errBlock.style.display = "none";
        validPasswd = testPasswd();
        enableLoginButton(validPasswd, validEmail);
    }
    
    function testPasswd() {
        let str = passwd.value;
    
    if (
        str.match(/[a-z]/g)) {
            if (str.match(/[A-Z]/g)) {
                if (str.match(/[0-9]/g)) {
                   if (str.match(/[^a-zA-Z\d]/g)) {
                        if (str.length >= 8) {
                            return true;
                        } else {
                            animation(errMes, errBlock,"Password length shuld be at least 8 symbols");
                            return false;
                        }
                    } else {
                        animation(errMes, errBlock, "Need at least 1 special character");
                        return false;
                    }
                } else {
                    animation(errMes, errBlock, "Need at least 1 number");
                    return false;
                }
            } else {
    
                animation(errMes, errBlock, "Need at least 1 uppercase character");
                return false;
            }
        } else {
            animation(errMes, errBlock, "Need at least 1 lowercase character");
            return false;
        }
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
            loginSendButton.disabled = false;
            loginSendButton.style.backgroundColor = "#E84A5F";
            loginSendButton.style.cursor = "pointer";
        } else {
            loginSendButton.disabled = true;
            loginSendButton.style.backgroundColor = "rgba(232, 74, 95, 0.5)";
            loginSendButton.style.cursor = "not-allowed";
        }
    }
    
}
    