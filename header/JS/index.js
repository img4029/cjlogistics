// a.nav_list_content_1 hover
$(document).ready(function () {
    $('a.nav_list_content_1').hover(
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("background-color", "white"); },
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("background-color", "transparent"); }
    );
    // $('a.nav_list_content_1').hover(
    //     function () { $('a.nav_list_content_1').css("color", "black"); },
    //     function () { $('a.nav_list_content_1').css("color", "white"); }
    // );
    // $('a.nav_list_content_1').hover(
    //     function () { $('a.nav_side_language_1').css("color", "black"); },
    //     function () { $('a.nav_side_language_1').css("color", "white"); }
    // );
    // $('a.nav_list_content_1').hover(
    //     function () { $('a.nav_logo_1').css("background-position", "top"); },
    //     function () { $('a.nav_logo_1').css("background-position", "bottom"); }
    // );
    // $('a.nav_list_content_1').hover(
    //     function () { $('div.nav_side_1>div:nth-child(2)>a>span').css("background-position", "left 0px"); },
    //     function () { $('div.nav_side_1>div:nth-child(2)>a>span').css("background-position", "left -33px"); }
    // );
    // $('a.nav_list_content_1').hover(
    //     function () { $('div.nav_side_1>div:nth-child(3)>a>span').css("background-position", "right 0px"); },
    //     function () { $('div.nav_side_1>div:nth-child(3)>a>span').css("background-position", "right -33px"); }
    // );
});

// // div.nav_list_submenu_1 hover
$(document).ready(function () {
    $('div.nav_list_submenu_1').hover(
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("background-color", "white"); },
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("background-color", "transparent"); }
    );
    // $('div.nav_list_submenu_1').hover(
    //     function () { $('a.nav_list_content_1').css("color", "black"); },
    //     function () { $('a.nav_list_content_1').css("color", "white"); }
    // );
    // $('div.nav_list_submenu_1').hover(
    //     function () { $('a.nav_side_language_1').css("color", "black"); },
    //     function () { $('a.nav_side_language_1').css("color", "white"); }
    // );
    // $('div.nav_list_submenu_1').hover(
    //     function () { $('a.nav_logo_1').css("background-position", "top"); },
    //     function () { $('a.nav_logo_1').css("background-position", "bottom"); }
    // );
    // $('div.nav_list_submenu_1').hover(
    //     function () { $('div.nav_side_1>div:nth-child(2)>a>span').css("background-position", "left 0px"); },
    //     function () { $('div.nav_side_1>div:nth-child(2)>a>span').css("background-position", "left -33px"); }
    // );
    // $('div.nav_list_submenu_1').hover(
    //     function () { $('div.nav_side_1>div:nth-child(3)>a>span').css("background-position", "right 0px"); },
    //     function () { $('div.nav_side_1>div:nth-child(3)>a>span').css("background-position", "right -33px"); }
    // );
});


$(document).ready(function () {
    $('div.nav_list_submenu_1').hover(
        function () { $(this).prev().attr('style', 'color: #007ac3 !important'); },
        function () { $(this).prev().attr('style', 'color: black'); }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $(this).prev().children().css("display", "flex"); },
        function () { $(this).prev().children().css("display", "none"); }
    );
});
$(document).ready(function () {
    $('a.nav_list_content_1').hover(
        function () { },
        function () { $(this).parent().parent().find('a#header_anchor').attr('style', 'color: #007ac3 !important'); }
    );
    $('a.nav_list_content_1').hover(
        function () { },
        function () { $(this).parent().parent().find('div#header_anchor_underbar').css("display", "flex"); }
    );
    // $('a.nav_list_content_1').hover(
    //     function () { },
    //     function () { $(this).find('a#header_anchor').attr('style', 'color: #007ac3 !important'); }
    // );
    // $('a.nav_list_content_1').hover(
    //     function () { },
    //     function () { $(this).find('div#header_anchor_underbar').css("display", "flex"); }
    // );
});
$(document).ready(function () {
    $('a.nav_list_content_1').hover(
        function () { $('a.nav_list_content_1').not(this).attr('style', 'color: black'); },
        function () { }
    );
    $('a.nav_list_content_1').hover(
        function () { $('a.nav_list_content_1').not(this).children().css("display", "none"); },
        function () { }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $('div.nav_list_submenu_1').not(this).prev().attr('style', 'color: black'); },
        function () { $(this).parent().parent().find('a#header_anchor').attr('style', 'color: #007ac3 !important'); }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $('div.nav_list_submenu_1').not(this).prev().children().css("display", "none"); },
        function () { $(this).parent().parent().find('div#header_anchor_underbar').css("display", "flex"); }
    );
});

$(document).ready(function () {
    $('a.nav_list_content_1').hover(
        function () { $("div.search-total-dim").css("display", "flex"); },
        function () { $("div.search-total-dim").css("display", "none"); }
    );
    $('a.nav_list_content_1').hover(
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("z-index", "2000"); },
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("z-index", "0"); }
    );
    $('a.nav_list_content_1').hover(
        function () { $("body").css("overflow", "hidden"); },
        function () { $("body").css("overflow", "visible"); }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $("div.search-total-dim").css("display", "flex"); },
        function () { $("div.search-total-dim").css("display", "none"); }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("z-index", "2000"); },
        function () { $('div.nav_list_box_1').parent('nav.nav_bar_1').css("z-index", "0"); }
    );
    $('div.nav_list_submenu_1').hover(
        function () { $("body").css("overflow", "hidden"); },
        function () { $("body").css("overflow", "visible"); }
    );
});