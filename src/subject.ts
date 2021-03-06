import './css/subject.css';

import $ from 'jquery';

// Not the best way to handle routing, but here we go

$(document).ready( ()=> {
    if (window.location.href.indexOf("#") != -1) {
        let location = window.location.href.match(/#.+/)![0];
        navgiate(location);
    }
});

$("#main-tabs .nav-link").click(function (event) {
    navgiate(<string>$(this).attr("href"));
});

function navgiate(location: string): void {

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

function defaultNavigation() : void{
    $("#main-tabs .nav-item:first-child a").addClass("active");
    $("#exam-papers").removeClass("hide");
}

function handleDisbable(selector: string) : boolean {
    if ($(selector).hasClass("disabled")) {
        defaultNavigation();
        return false;
    } else {
        $(selector).addClass("active");
        return true;
    }
}

$(".exam-year").click( function (event) {
    event.preventDefault();
    
    let div =  $($(this).attr("href"));

    $("html, body").animate({
        scrollTop: div.offset()!.top,
    }, 500);

});
