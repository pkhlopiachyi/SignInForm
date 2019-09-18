let block = document.getElementById('login-block');
let btn = document.getElementById('login');
let close = document.getElementById('close');

btn.onclick = () => {
    block.style.display = "block";
}
close.onclick = () => {
    block.style.display = "none";
}
window.onclick = (event) => {
    if (event.target == block) {
        block.style.display = "none";
    }
}