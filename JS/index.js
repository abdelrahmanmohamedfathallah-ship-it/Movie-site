const hamMenu = document.querySelector ('#ham-menu');
const MobileSide = document.querySelector ('#mobile-sidebar');
const XMark = document.querySelector ('#X-mark');
const Monthly = document.querySelector ('#monthly');
const Yearly = document.querySelector ('#yearly');



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

Monthly.addEventListener('click', function() {
    Monthly.style.backgroundColor = '#1F1F1F';
    Yearly.style.backgroundColor = 'transparent';
    

});

Yearly.addEventListener('click', function() {
    Yearly.style.backgroundColor = '#1F1F1F';
    Monthly.style.backgroundColor = 'transparent';
});


