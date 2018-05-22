import "./css/al.css";
import "./css/loader.css"

$("#cmbQualification").change(function(){

    loadSubjects();

});

$(document).ready(function(){
    loadSubjects();
})

function loadSubjects(){
    $("#loader-container").removeClass("hide");
    $("#ulQualifications").addClass("hide");
    $.ajax({
        method:"GET",
        url:"dist/js/al-subject-db.json",
        async:true,
        dataType: "json"
    }).done(function(response){
        var subjects = (response);

        $("#loader-container").addClass("hide");
        $("#ulQualifications").removeClass("hide");
        $("#ulQualifications li").remove();

        for(var index in subjects){
            var subject = subjects[index];

            if ($("#cmbQualification").val() == "all"){
                $("#ulQualifications").append("<li><a href=\"al-" + subject.subject +".html\">" +  subject.subject + "</a></li>");
            }else{
                if (subject.tag === $("#cmbQualification").val()){
                    $("#ulQualifications").append("<li><a href=\"al-" + subject.subject +".html\">" +  subject.subject + "</a></li>");
                }
            }
        }

    });
}
