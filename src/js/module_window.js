window.showBackDrop = () => {
    let backDrop = document.getElementById('back-drop');
    let loginBodyBlock = document.getElementById('body-block');
    let forgotBlock = document.getElementById('forgot-block');
    let signUpBlock = document.getElementById('signup-block');

    if (backDrop && loginBodyBlock && forgotBlock && signUpBlock) {
        backDrop.style.display = "block";
        loginBodyBlock.style.display = "block";
        forgotBlock.style.display = "none";
        signUpBlock.style.display = "none";
    }
};

window.closeBackDrop = () => {
    let backDrop = document.getElementById('back-drop');
    backDrop.style.display = "none";
};

window.changeBlock = (openBlockId, closeBlockId) => {
    let openBlock = document.getElementById(openBlockId);
    let closeBlock = document.getElementById(closeBlockId);
    closeBlock.style.display = "none";
    openBlock.style.display = "block";
};

window.onclick = (event) => {
    let backDrop = document.getElementById('back-drop');
    if (event.target == backDrop) {
        backDrop.style.display = "none";
    }
};