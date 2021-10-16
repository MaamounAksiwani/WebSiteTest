const bars = document.querySelector(".toggle-menu");
const menu = document.querySelector("nav ul");
const close_menu = document.querySelector(".toggle-close");
bars.addEventListener('click', () => {
    menu.style.display = 'block';
    bars.style.display = 'none';
    close_menu.style.display = 'block';
})
close_menu.addEventListener("click", () => {

    bars.style.display = 'block';
    menu.style.display = 'none';
    close_menu.style.display = 'none';

});

/*
document.body.onclick = body_click();

function body_click() {
    alert("Hello world");
}
*/