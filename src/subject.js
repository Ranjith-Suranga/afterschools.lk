import './css/subject.css';

// Not the best way to handle routing, but here we go

$(document).ready(function () {
    if (window.location.href.indexOf("#") != -1) {
        navgiate(window.location.href.match(/#.+/)[0]);
    }
});

$("#main-tabs .nav-link").click(function (event) {
    navgiate($(this).attr("href"))
});

function navgiate(location) {

    $("#tab-content>div").addClass("hide");
    $("#main-tabs .nav-item a").removeClass("active");

    switch (location) {
        case "#EXAM":
            if (handleDisbable("#main-tabs .nav-item:first-child a")) {
                $("#exam-papers").removeClass("hide");
            }
            break;
        case "#BOOKS":
            if (handleDisbable("#main-tabs .nav-item:nth-child(2) a")) {
                $("#books-resources").removeClass("hide");
            }
            break;
        case "#VIDEOS":
            if (handleDisbable("#main-tabs .nav-item:last-child a")) {
                $("#video-tutorial").removeClass("hide");
            }
            break;
        default:
            defaultNavigation();
            break;
    }
}

function defaultNavigation(){
    $("#main-tabs .nav-item:first-child a").addClass("active");
    $("#exam-papers").removeClass("hide");
}

function handleDisbable(selector) {
    if ($(selector).hasClass("disabled")) {
        defaultNavigation();
        return false;
    } else {
        $(selector).addClass("active");
        return true;
    }
}

$(".exam-year").click(function (event) {
    event.preventDefault();

    var div = $($(this).attr("href"));

    $("html, body").animate({
        scrollTop: div.offset().top
    }, 500);
});