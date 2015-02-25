/*File: Mobile_JavaScript.js 
Author: Divneet Singh Sethi 
Desription: javascript for survey */

function init() {
    console.log("Mobile app started.");
}

//Validate name in contact form
function validateName() {
    var name = document.getElementById("txtName").value;

    if (name == null || name == "") {
        alert("Name cannot be empty");
    }
    else {
        validateNumber();
    }
}

//Validate number in contact form
function validateNumber() {
    var number = document.getElementById("txtNumber").value;

    if (number == null || number == "" || isNaN(number)) {
        alert("Number cannot be empty and should only be digits");
    }
    else {
        validateEmail();
    }
}

//Validate email in contact form
function validateEmail() {
    var email = document.getElementById("txtEmail").value;

    if (email == null || email == "") {
        alert("Email cannot be empty");
    }
}

function calcResult() {

    //variables to maintain count of options selected
    var optA = 0;
    var optB = 0;
    var optC = 0;
    var optD = 0;

    var ques1Opt1 = document.getElementById("ques1opt1");
    var ques1Opt2 = document.getElementById("ques1opt2");
    var ques1Opt3 = document.getElementById("ques1opt3");
    var ques1Opt4 = document.getElementById("ques1opt4");

    var ques2Opt1 = document.getElementById("ques2opt1");
    var ques2Opt2 = document.getElementById("ques2opt2");
    var ques2Opt3 = document.getElementById("ques2opt3");
    var ques2Opt4 = document.getElementById("ques2opt4");

    var ques3Opt1 = document.getElementById("ques3opt1");
    var ques3Opt2 = document.getElementById("ques3opt2");
    var ques3Opt3 = document.getElementById("ques3opt3");
    var ques3Opt4 = document.getElementById("ques3opt4");

    var ques4Opt1 = document.getElementById("ques4opt1");
    var ques4Opt2 = document.getElementById("ques4opt2");
    var ques4Opt3 = document.getElementById("ques4opt3");
    var ques4Opt4 = document.getElementById("ques4opt4");

    var ques5Opt1 = document.getElementById("ques5opt1");
    var ques5Opt2 = document.getElementById("ques5opt2");
    var ques5Opt3 = document.getElementById("ques5opt3");
    var ques5Opt4 = document.getElementById("ques5opt4");


    //Check answer one
    if (ques1Opt1.checked) {
        optA++;
    }
    else if (ques1Opt2.checked) {
        optB++;
    }
    else if (ques1Opt3.checked) {
        optC++;
    }
    else if (ques1Opt4.checked) {
        optD++;
    }

    //Check answer two
    if (ques2Opt1.checked) {
        optA++;
    }
    else if (ques2Opt2.checked) {
        optB++;
    }
    else if (ques2Opt3.checked) {
        optC++;
    }
    else if (ques2Opt4.checked) {
        optD++;
    }

    //Check answer three
    if (ques3Opt1.checked) {
        optA++;
    }
    else if (ques3Opt2.checked) {
        optB++;
    }
    else if (ques3Opt3.checked) {
        optC++;
    }
    else if (ques3Opt4.checked) {
        optD++;
    }

    //Check answer four
    if (ques4Opt1.checked) {
        optA++;
    }
    else if (ques4Opt2.checked) {
        optB++;
    }
    else if (ques4Opt3.checked) {
        optC++;
    }
    else if (ques4Opt4.checked) {
        optD++;
    }

    //Check answer five
    if (ques5Opt1.checked) {
        optA++;
    }
    else if (ques5Opt2.checked) {
        optB++;
    }
    else if (ques5Opt3.checked) {
        optC++;
    }
    else if (ques5Opt4.checked) {
        optD++;
    }

    //jQuery to set labels for result in popup
    $("label#resultOptA").text(optA);
    $("label#resultOptB").text(optB);
    $("label#resultOptC").text(optC);
    $("label#resultOptD").text(optD);
}

