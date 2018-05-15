import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import 'jquery';

$(".main-nav-box").click(function(){
    switch ($(this).find("h2").text()){
        case "O/L":
            window.location.replace(window.location.origin + "/ordinary-level.html");
            break;
        case "A/L":
            window.location.replace(window.location.origin + "/advanced-level.html");
            break;
    }
});

$("footer>div>div>div>span:last-child").click(function(){
   $("html,body").animate({
       scrollTop: "0px"
   },300);
});
