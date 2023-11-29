window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;

        let opacityValue = 1 - scrollPosition / 700; 

        document.querySelector('.header_video_5').style.opacity = opacityValue;
    });