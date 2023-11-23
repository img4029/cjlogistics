window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        var opacityValue = 1 - scrollPosition / 800; 

        document.querySelector('.header_video_5').style.opacity = opacityValue;
    });

    function change() {
        let menuList = document.querySelector('.menu_list'),
            menuIcon1 = document.querySelector('.menu_icon1'),
            menuIcon2 = document.querySelector('.menu_icon2'),
            menuIcon3 = document.querySelector('.menu_icon3'),
            menuBtn = document.querySelector('#menuBtn');
        
        if (menuBtn.value == "A") {
            
            menuList.style.animation = "slidein 0.7s";
            menuList.style.animationFillMode = "forwards";
    
            menuIcon1.style.animation = "animate-line-1 1s";
            menuIcon1.style.animationFillMode = "forwards";
    
            menuIcon2.style.animation = "animate-line-2 1s";
            menuIcon2.style.animationFillMode = "forwards";
    
            menuIcon3.style.animation = "animate-line-3 1s";
            menuIcon3.style.animationFillMode = "forwards";
    
            menuBtn.value = "B";
        } else {
            menuList.style.animation = "slideout 0.7s";
    
            menuIcon1.style.animation = "animate-line-4 1s";
    
            menuIcon2.style.animation = "animate-line-5 1s";
    
            menuIcon3.style.animation = "animate-line-6 1s";
            
            menuBtn.value = "A";
        }
    }
    