import './css/ol.css';
import './css/loader.css'

$("#cmbQualification").change(function(){

    loadSubjects();

});

$(document).ready(function(){
    loadSubjects();
})

function loadSubjects(){
    $("#loader-container").removeClass("hide");
    $.ajax({
        method:"GET",
        url:"dist/js/ol-subject-db.json",
        async:true,
        dataType: "json"
    }).done(function(response){

        $("#loader-container").addClass("hide");
        var subjects = (response);

        $("#ulQualifications li").remove();

        for(var index in subjects){
            var subject = subjects[index];

            if ($("#cmbQualification").val() == "all"){
                $("#ulQualifications").append("<li><a href=\"ol-" + subject.subject +".html\">" +  subject.subject + "</a></li>");
            }else{
                if (subject.tag === $("#cmbQualification").val()){
                    $("#ulQualifications").append("<li><a href=\"ol-" + subject.subject +".html\">" +  subject.subject + "</a></li>");
                }
            }
        }

    });
}
