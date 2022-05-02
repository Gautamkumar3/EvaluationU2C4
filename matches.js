// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem("schedule"));

// filter by venue start code
document.querySelector("#filterVenue").addEventListener("change", filterVenue);

function filterVenue(){
      var select=document.querySelector("#filterVenue").value;
      
      var filterList=matchData.filter(function(el){
          return el.Venue==select
      })
      matchFunc(filterList)
}


// last filterby venue

var arrFav=JSON.parse(localStorage.getItem("favourites")) ||  [];
matchFunc(matchData);

function matchFunc(data){

    document.querySelector("tbody").innerHTML=""
    data.forEach(function(el){

        var tr=document.createElement("tr");
        
        var td1=document.createElement("td")
        td1.innerText=el.Match_num;

        var td2=document.createElement("td")
        td2.innerText=el.TeamA;

        var td3=document.createElement("td")
        td3.innerText=el.TeamB;
        var td4=document.createElement("td")
        td4.innerText=el.Date;

        var td5=document.createElement("td")
        td5.innerText=el.Venue;

        var td6=document.createElement("td")
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.addEventListener("click", function(){
              favaoriteData(el)
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)

    })
}

function  favaoriteData(el){
    arrFav.push(el);
  localStorage.setItem("favourites" , JSON.stringify(arrFav))
}

