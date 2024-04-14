"use strict"

//------------------------------GET allt (FETCH)---------------------------------//

let url = "http://localhost:3000/api/workexperience"; //skapare url

document.addEventListener("DOMContentLoaded", function() { //När sidan laddats in körs
    getAll();
});

async function getAll() {
    const response = await fetch(url, { //skickat fetch mot url
        method: "GET", //GET förfrågan
        headers: {
          "Content-Type": "application/json", //JSON fromat
        },
    
      })
      
      const data = await response.json(); //Väntar på json
      //console.log(data);


      const allCompanysDiv = document.getElementById("allCompanys"); //väljer div

      allCompanysDiv.innerHTML = ""; //rensar så dne är tom

      data.forEach(company => { //kollar varje 
        console.log(company)
        const companyUL = document.createElement("ul");//skapar ul
        
        const idLI = document.createElement("li"); //Skapar li
        idLI.textContent = "ID: " + company.id;
        companyUL.appendChild(idLI); //lägger till i UL
        
        const companynameLI = document.createElement("li"); //Skapar li
        companynameLI.textContent = "Företags namn: " + company.companyname; //sätter texten
        companyUL.appendChild(companynameLI); //lägger till i UL
        
        const jobtitleLi = document.createElement("li"); //Skapar li
        jobtitleLi.textContent = "Roll: " + company.jobtitle;
        companyUL.appendChild(jobtitleLi); //lägger till i UL
        
        const locationLI = document.createElement("li"); //Skapar li
        locationLI.textContent = "Plats: " + company.location;
        companyUL.appendChild(locationLI); //lägger till i UL
        
        const startdateLI = document.createElement("li"); //Skapar li
        startdateLI.textContent = "Startdatum: " + company.startdate;
        companyUL.appendChild(startdateLI); //lägger till i UL
        
        const enddateLI = document.createElement("li"); //Skapar li
        enddateLI.textContent = "Slutdatum: " + company.enddate;
        companyUL.appendChild(enddateLI); //lägger till i UL

        const deleteButton = document.createElement("button"); //Skapar knapp
        deleteButton.textContent = "Radera"; //sätter texten
        deleteButton.addEventListener("click", async function() { //vid klick kalla funktion deleteData med id
          await deleteData(company.id);
          companyUL.remove(); //tar bort UL elemntet
            
        });

        companyUL.appendChild(deleteButton); //lägger till i UL
        
        
        allCompanysDiv.appendChild(companyUL); //lägger till i Div
    });
    }


//createData("MIUN", "Student", "Sundsvall", "2023-08-01", "2025-06-01"); //Kallar funktion med parametrar som behövs
 

//------------------------------POST (FETCH)---------------------------------//
//------------------------------POST (FETCH)---------------------------------//
//------------------------------POST (FETCH)---------------------------------//

let addButton = document.getElementById("addButton"); //Väljer knmappne
 
let form = document.getElementById("form"); //Väljer form


addButton.addEventListener("click", async function(e) {//Vid klick
  
  e.preventDefault(); //hindrar defualt

  let companynameInput = document.getElementById("companynameID");  //Väljer element (input)
  let jobtitleInput =  document.getElementById("jobtitleID"); //Väljer element (input)
  let locationInput = document.getElementById("locationID"); //Väljer element (input)
  let startdateInput = document.getElementById("startdateID"); //Väljer element (input)
  let enddateInput = document.getElementById("enddateID"); //Väljer element (input)

  let errorDiv = document.getElementById("messageErr"); //Gör en div för error

  if(!companynameInput.value || !jobtitleInput.value || !locationInput.value || !startdateInput.value || !enddateInput.value) { //inget får vara tomt
    console.log("fyll i all data"); //i konsoll
    errorDiv.textContent = "Fyll i samtliga fält"; //till div 
    errorDiv.style.display = "block"; //Så man sr div
    
  }else {
  
  await createData(companynameInput.value, jobtitleInput.value, locationInput.value, startdateInput.value, enddateInput.value); //skickar in i funktionen
  window.location.reload(); //laddar om
}});




//funktion för att skapa nytt (POST)
async function createData(companyname, jobtitle, location, startdate, enddate) {

  //skapar objektet company som sätts efter de inmatade paramertrarna
  let company = {
    companyname: companyname, 
    jobtitle: jobtitle,
    location: location,
    startdate: startdate,
    enddate: enddate
  }
  
  const response = await fetch(url, { //skickat fetch mot url
    method: "POST", //POST förfrågan
    headers: {
      "Content-Type": "application/json", //JSON fromat
    },

    body: JSON.stringify(company) //Gör om company till json
  })
  const data = await response.json(); //Väntar på json
};

//------------------------------DELETE (FETCH)---------------------------------//

//deleteData(id);//kallar funktion med id

  async function deleteData(id) { //Funtktion för att radera
    
    const response = await fetch(`${url}${id}`, { //fetch url med id
      method: "DELETE", //delete förfrågan
    })
    const data = await response.json();//Väntar till json
    console.log(data)
  }


