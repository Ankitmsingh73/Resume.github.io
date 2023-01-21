function addNewWeField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("placeholder","Work Experience")
    

    let weob=document.getElementById("we");
    let weAddButton = document.getElementById("weaddButton");

    weob.insertBefore(newNode,weAddButton);
}

function addNewAqField(){
   
    let secNode = document.createElement("textarea");
    secNode.classList.add("form-control");
    secNode.classList.add("aqField");
    secNode.classList.add("mt-1");
    secNode.setAttribute("placeholder","Enter here");
    

    let aqob = document.getElementById("aq");
    let aqAddButton = document.getElementById("aqAddButton");

    aqob.insertBefore(secNode,aqAddButton);
}

// ----------------------------------------------
function generateCV()
{
//    ---------inserting the values of form to template-------------------------------------

    document.getElementById("nameT1").innerHTML = document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("AddressT").innerHTML= document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("liT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
//    --------------------------inserting work exp in template--------- 
    let wes = document.getElementsByClassName("weField");
    let str="";
     for(let e of wes)
      {
        str = str + `<li>${e.value}</li>`;
      }
    document.getElementById("weT").innerHTML=str;

    // -----------------inserting Academic Qulifiacation in template---
    let aq = document.getElementsByClassName("aqField");
    let strr ="";
    for(let ee of aq)
       {
        strr = strr + `<li>${ee.value}</li>`;
       }
    document.getElementById("aqT").innerHTML = strr;

    document.getElementById("r").style.display = "none";
    document.getElementById("cv-template").style.display="block";
    document.getElementById("nav").style.display = "none";
    
    // ----------------------------------------------------------------------
        //    profile pic   
        let file = document.getElementById("imgField").files[0];
        let reader = new FileReader();
          reader.readAsDataURL(file);
        // -----------------settting to template----------
        reader.onloadend = function(){
        document.getElementById("imgT").src = reader.result;}

}


function printCV()
{  
   document.getElementById("p").style.display = "none";
   window.print();
   document.getElementById("p").style.display = "block";
  
}
