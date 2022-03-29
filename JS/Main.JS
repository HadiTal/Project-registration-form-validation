//Select the required elements
const firstName = document.getElementById("firstName"),
    lastName = document.getElementById("lastName"),
    email = document.getElementById("email"),
    phoneNumber = document.getElementById("phonenumber"),
    usearName = document.getElementById("username"),
    password = document.getElementById("password"),
    submitBtn = document.querySelector(".submit"),
    overlayElement = document.querySelector(".overlay"),
    spiinerContiner = document.querySelector(".container-spiiner"),
    body = document.querySelector("body"),
    captionError = document.querySelector(".submission-status"),
    eyeHidden = document.querySelector(".fa-eye-slash"),
    eyeDiaply = document.querySelector(".fa-eye"),
    arrow = document.querySelector(".arrow"),
    mainWrapper = document.querySelector(".main-wrapper"),
    closeHeader = document.querySelector(".fa-xmark"),
    from = document.querySelector("form"),
    formIteam = document.querySelectorAll(".form-item"),
    closeBtn = document.querySelector(".close-btn");

//select all element
const elements = [firstName, lastName, email, phoneNumber, usearName, password];

//call eventListners
eventListners();

//functoion all eventListner
function eventListners() {
    firstName.addEventListener("blur", checkValidation);
    lastName.addEventListener("blur", checkValidation);
    email.addEventListener("blur", checkValidation);
    phoneNumber.addEventListener("blur", checkValidation);
    usearName.addEventListener("blur", checkValidation);
    password.addEventListener("blur", checkValidation);
    document.addEventListener("DOMContentLoaded", appInit);
    eyeHidden.addEventListener("click", shoWElementEyeShow);
    eyeDiaply.addEventListener("click", hidePassword);
    submitBtn.addEventListener("click", regiserFinal);
    closeHeader.addEventListener("click", closePopupHeader);
    closeBtn.addEventListener("click", closePopupHeader);
    document.addEventListener("keydown", closePopup);
}

//temp function click submit

//The main validation function of the fields

function checkValidation() {
    //Get the current field
    const elementFiled = this;

    //Check if the fields are empty or not
    filedsEmpty(elementFiled);

    //Email field validation separately

    if (elementFiled.id === "email") {
        validateEmail(elementFiled);
    }

    //Phone number validation
    if (elementFiled.id === "phonenumber") {
        validatePhoneNumber(elementFiled);
    }

    //first Name validation
    if (elementFiled.id == "firstName") {
        nameValidation(elementFiled);
    }

    //last Name validation
    if (elementFiled.id === "lastName") {
        nameValidation(elementFiled);
    }

    //validation userName
    if (elementFiled.id === "username") {
        validationUserName(elementFiled);
    }

    //validation password
    if (elementFiled.id === "password") {
        validationPassword(elementFiled);
    }

    //valodation End
    GeneralValidation(elements);
}

function appInit(e) {
    submitBtn.disabled = true;
    submitBtn.classList.add("disablebutton");
    submitBtn.classList.remove("submit-btn");
}

//check filed empty
function filedsEmpty(filed) {
    if (filed.value.length === 0) {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
    } else {
        filed.parentElement.classList.add("green");
        filed.parentElement.classList.remove("red");
        filed.classList.remove("error");
    }
}

//User email validation
function validateEmail(filed) {
    console.log(filed);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(filed.value)) {
        filed.parentElement.classList.add("green");
        filed.parentElement.classList.remove("red");
        filed.classList.remove("error");
    } else {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
    }
}

//Phone number validation

function validatePhoneNumber(filed) {
    if (/^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(filed.value)) {
        filed.parentElement.classList.add("green");
        filed.parentElement.classList.remove("red");

        filed.classList.remove("error");
    } else {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
    }
}

//firstName validation
function nameValidation(filed) {
    if (/^[A-z ]+$/.test(filed.value)) {
        filed.parentElement.classList.add("green");
        filed.parentElement.classList.remove("red");

        filed.classList.remove("error");
    } else {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
    }
}

//validation userName
function validationUserName(filed) {
    if (/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/i.test(filed.value)) {
        filed.parentElement.classList.add("green");
        filed.classList.remove("error");
        captionError.style.visibility = "hidden";
        filed.parentElement.classList.remove("red");
    } else {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
        captionError.style.visibility = "visible";
        captionError.textContent = "Username must be longer than three characters";
    }
}

function validationPassword(filed) {
    console.log(filed.value);

    if (filed.value.length >= 8 && filed.value.length <= 15) {
        filed.parentElement.classList.add("green");
        filed.parentElement.classList.remove("red");
        filed.classList.remove("error");
        captionError.style.visibility = "hidden";
    } else {
        filed.parentElement.classList.add("red");
        filed.parentElement.classList.remove("green");
        filed.classList.add("error");
        captionError.style.visibility = "visible";
        captionError.textContent =
            "Password must be a minimum of eight characters and a maximum of 15 characters";
    }
}

function GeneralValidation(elements) {
    const error = document.querySelectorAll(".error");

    if (
        elements[0].value !== "" &&
        elements[1].value !== "" &&
        elements[2].value !== "" &&
        elements[3].value !== "" &&
        elements[4].value !== ""
    ) {
        if (error.length == 0) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("disablebutton");
            submitBtn.classList.add("submit-btn");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add("disablebutton");
            submitBtn.classList.remove("submit-btn");
        }
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.add("disablebutton");
        submitBtn.classList.remove("submit-btn");
    }
}

//shoWElementEyeShow
function shoWElementEyeShow() {
    const txtPassword = eyeHidden.parentElement.children[1].value;

    if (txtPassword.length > 0) {
        eyeHidden.classList.add("displey-eye");
        eyeDiaply.classList.remove("displey-eye");
        eyeHidden.parentElement.children[1].type = "text";
    }
}

//hidePassword
function hidePassword() {
    eyeDiaply.parentElement.children[1].type = "password";
    eyeDiaply.classList.add("displey-eye");
    eyeHidden.classList.remove("displey-eye");
}
//register final
function regiserFinal(e) {
    e.preventDefault();

    //Activate the spinner for the register button and remove the arrow mark
    spiinerContiner.classList.remove("displey-spinner");
    arrow.classList.add("display-arrow");

    //Display the popup after three seconds
    setTimeout(() => {
        spiinerContiner.classList.add("displey-spinner");
        overlayElement.classList.remove("display-overlay");
        body.classList.add("blur-body");
        mainWrapper.classList.add("blur-main-wraper");
    }, 3000);
}

//Close the popup with the close button in the header
function closePopupHeader() {
    //reset form
    from.reset();

    //Change classes and return to the first mode
    spiinerContiner.classList.remove("displey-spinner");
    overlayElement.classList.add("display-overlay");
    body.classList.remove("blur-body");
    mainWrapper.classList.remove("blur-main-wraper");
    spiinerContiner.classList.add("displey-spinner");
    arrow.classList.remove("display-arrow");

    //Disable the register button
    appInit();

    //Remove the green border
    formIteam.forEach((element) => {
        element.children[1].classList.remove("green");
    });
}

//closePopup
function closePopup(e) {
    if (e.key === "Escape") {
        closePopupHeader();
    }
}