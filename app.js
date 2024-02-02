document.addEventListener('DOMContentLoaded', function () {
    var bigPictureImg = document.getElementById('bigPictureImg');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        bigPictureImg.style.transform = 'translateY(' + scrollPosition * 0.1 + 'px)';
    });
});