window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        let opacityValue = 1 - scrollPosition / 800; 

        document.querySelector('.header_video_5').style.opacity = opacityValue;
    });