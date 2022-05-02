// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", formSubmit);


var arrData=JSON.parse(localStorage.getItem("schedule")) || [];

function formSubmit(){
       event.preventDefault()

       var objData={
           Match_num : masaiForm.matchNum.value,
           TeamA : masaiForm.teamA.value,
           TeamB : masaiForm.teamB.value,
           Date : masaiForm.date.value,
           Venue :masaiForm.venue.value
       }

       arrData.push(objData);

       localStorage.setItem("schedule" , JSON.stringify(arrData))
}
