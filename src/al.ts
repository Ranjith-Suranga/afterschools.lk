import "./css/al.css";
import "./css/loader.css"
import $ from 'jquery'

$("#cmbQualification").change(()=>{

    loadSubjects();

});

$(document).ready(()=>{
    loadSubjects();
})

function loadSubjects(): void{
    $("#loader-container").removeClass("hide");
    $("#ulQualifications").addClass("hide");
    $.ajax({
        method:"GET",
        url:"dist/js/al-subject-db.json",
        async:true,
        dataType: "json"
    }).done((response)=>{
        let subjects = (response);

        $("#loader-container").addClass("hide");
        $("#ulQualifications").removeClass("hide");
        $("#ulQualifications li").remove();

        for(let index in subjects){
            let subject = subjects[index];

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
