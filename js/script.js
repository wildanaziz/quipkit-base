const menuBtn = document.querySelector('.menu-btn');
const menuBtnIcon = document.querySelector('.menu-btn i');
const linkMenuBtn = document.querySelector('.link-hero-menu');

menuBtn.onclick = function() {
    linkMenuBtn.classList.toggle('open');

    const isOpen = linkMenuBtn.classList.contains('open');
    
    menuBtnIcon.textContent = isOpen
        ? 'close'
        : 'menu'
}

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

