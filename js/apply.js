
function validateForm() {
    validateAge();
    validatePostcode();
    validateOtherSkill();
}

function calculateAge(birthdate) {
    const today = new Date();
    const birthdateArray = birthdate.split("-");
    const birthYear = parseInt(birthdateArray[0]);
    const birthMonth = parseInt(birthdateArray[1]) - 1;
    const birthDay = parseInt(birthdateArray[2]);

    const ageDate = new Date(today - new Date(birthYear, birthMonth, birthDay));
    return ageDate.getUTCFullYear() - 1970;
}

function validateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const age = calculateAge(birthdate);

    if (age >= 15 && age <= 80) {
        document.getElementById("validationdate").textContent = "Valid age!";
    } else {
        document.getElementById("validationdate").textContent = "Age must be between 15 and 80.";
    }
}


function validatePostcode() {
    const stateElement = document.getElementById("state");
    const postcodeElement = document.getElementById("postcode");
    const validationMessage = document.getElementById("validationpostalcode");

    const state = stateElement.value;
    const postcode = postcodeElement.value;

    const postcodeFirstDigit = parseInt(postcode.charAt(0));

    switch (state) {
        case "VIC":
            if (postcodeFirstDigit === 3 || postcodeFirstDigit === 8) {
                validationMessage.textContent = "Valid postcode for VIC.";
            } else {
                validationMessage.textContent = "Invalid postcode for VIC.";
            }
            break;
        case "NSW":
            if (postcodeFirstDigit === 1 || postcodeFirstDigit === 2) {
                validationMessage.textContent = "Valid postcode for NSW.";
            } else {
                validationMessage.textContent = "Invalid postcode for NSW.";
            }
            break;
        case "QLD":
            if (postcodeFirstDigit === 4 || postcodeFirstDigit === 9) {
                validationMessage.textContent = "Valid postcode for QLD.";
            } else {
                validationMessage.textContent = "Invalid postcode for QLD.";
            }
            break;
        case "NT":
            if (postcodeFirstDigit === 0) {
                validationMessage.textContent = "Valid postcode for NT.";
            } else {
                validationMessage.textContent = "Invalid postcode for NT.";
            }
            break;
        case "WA":
            if (postcodeFirstDigit === 6) {
                validationMessage.textContent = "Valid postcode for WA.";
            } else {
                validationMessage.textContent = "Invalid postcode for WA.";
            }
            break;
        case "SA":
            if (postcodeFirstDigit === 5) {
                validationMessage.textContent = "Valid postcode for SA.";
            } else {
                validationMessage.textContent = "Invalid postcode for SA.";
            }
            break;
        case "TAS":
            if (postcodeFirstDigit === 7) {
                validationMessage.textContent = "Valid postcode for TAS.";
            } else {
                validationMessage.textContent = "Invalid postcode for TAS.";
            }
            break;
        case "ACT":
            if (postcodeFirstDigit === 0) {
                validationMessage.textContent = "Valid postcode for ACT.";
            } else {
                validationMessage.textContent = "Invalid postcode for ACT.";
            }
            break;
        default:
            validationMessage.textContent = "Please select a state.";
    }
}

function validateOtherSkill() {
    const otherCheckbox = document.getElementById("otherCheckbox");
    const otherTextarea = document.getElementById("otherTextarea");
    const validationMessage = document.getElementById("validationtextarea");

    // Check if the "Other" checkbox is checked
    if (otherCheckbox.checked) {
        otherTextarea.setAttribute("required", "required");
    } else {
        otherTextarea.removeAttribute("required");
    }

    // Additional form validation logic can be added here
    // For example, check if at least one skill is selected

    // Display validation message
    //validationMessage.textContent = "validated!";
}