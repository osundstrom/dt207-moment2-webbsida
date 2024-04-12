"use strict";
//------------------------------POST (FETCH)---------------------------------//
let url = "http://localhost:3000/api/workexperience"; //skapare url
document.addEventListener("DOMContentLoaded", function() {
    getAll();
});
async function getAll() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json(); //Väntar på json
    //console.log(data);
    const allCompanysDiv = document.getElementById("allCompanys");
    allCompanysDiv.innerHTML = "";
    data.forEach((company)=>{
        console.log(company);
        const companyUL = document.createElement("ul");
        const idLI = document.createElement("li");
        idLI.textContent = "id: " + company.id;
        companyUL.appendChild(idLI);
        const companynameLI = document.createElement("li");
        companynameLI.textContent = "companyname: " + company.companyname;
        companyUL.appendChild(companynameLI);
        const jobtitleLi = document.createElement("li");
        jobtitleLi.textContent = "jobtitle: " + company.jobtitle;
        companyUL.appendChild(jobtitleLi);
        const locationLI = document.createElement("li");
        locationLI.textContent = "location: " + company.location;
        companyUL.appendChild(locationLI);
        const startdateLI = document.createElement("li");
        startdateLI.textContent = "startdate: " + company.startdate;
        companyUL.appendChild(startdateLI);
        const enddateLI = document.createElement("li");
        enddateLI.textContent = "enddate: " + company.enddate;
        companyUL.appendChild(enddateLI);
        allCompanysDiv.appendChild(companyUL);
    });
}
//createData("MIUN", "Student", "Sundsvall", "2023-08-01", "2025-06-01"); //Kallar funktion med parametrar som behövs
//funktion för att skapa nytt (POST)
async function createData(companyname, jobtitle, location, startdate, enddate) {
    //skapar objektet company som sätts efter de inmatade paramertrarna
    let company = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(company) //Gör om company till json
    });
    const data = await response.json(); //Väntar på json
}
//------------------------------PUT (FETCH)---------------------------------//
let id = 4; //väljer id
editData("Editid4", "EditStudent", "EditSundsvall", "2099-01-01", "2100-01-01"); //Kallar funktion med parametrar som behövs
//Funktion för att redigera/ändra data till ett visst id
async function editData(companyname, jobtitle, location, startdate, enddate) {
    //skapar objektet company som sätts efter de inmatade paramertrarna
    let company = {
        companyname: companyname,
        jobtitle: jobtitle,
        location: location,
        startdate: startdate,
        enddate: enddate
    };
    const response = await fetch(`${url}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(company) //Omvandlar till json
    });
    const data = await response.json();
    console.log(data);
}
//------------------------------DELETE (FETCH)---------------------------------//
deleteData(id); //kallar funktion med id
async function deleteData(id) {
    const response = await fetch(`${url}${id}`, {
        method: "DELETE"
    });
    const data = await response.json(); //Väntar till json
    console.log(data);
}

//# sourceMappingURL=index.de158e3a.js.map
