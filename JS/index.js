const hamMenu = document.querySelector ('#ham-menu');
const MobileSide = document.querySelector ('#mobile-sidebar');
const XMark = document.querySelector ('#X-mark');


hamMenu.addEventListener ('click' , function () {
    MobileSide.style.transform = 'translateX(0)';
    hamMenu.style.display = 'none'
    XMark.style.display = 'flex'
})
XMark.addEventListener ('click' , function () {
    MobileSide.style.transform = 'translateX(100%)';
    hamMenu.style.display = 'flex'
    XMark.style.display = 'none'
})


