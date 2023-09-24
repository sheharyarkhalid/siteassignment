

// Function to get the query parameter from the URL
function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (pair[0] === variable) {
          return pair[1];
      }
  }
  return null;
}

// Get the reference number from the URL
const referenceFromURL = getQueryVariable("ref");

// Check if a reference number is found in the URL
if (referenceFromURL) {
  console.log(referenceFromURL);
  document.getElementById("referenceInput").value = referenceFromURL;
}



// Get a reference to the form and its elements
const form = document.getElementById("myForm");
const firstnameInput = document.getElementById("firstname");
const secondnameInput = document.getElementById("secondname");
const birthdateInput = document.getElementById("birthdate");
const StreetaddressInput = document.getElementById("Streetaddress");
const Suburb_townInput = document.getElementById("Suburb_town");
const postcodeInput = document.getElementById("postcode");
const email_addressInput = document.getElementById("email_address");
const stateInput = document.getElementById("state");

const numberInput = document.getElementById("number");
const genderInput = document.getElementsByClassName("gender");
const skill1Input = document.getElementById("skill1");
const skill2Input = document.getElementById("skill2");
const otherCheckboxInput = document.getElementById("otherCheckbox");
const otherTextareaInput = document.getElementById("otherTextarea");

// Check if there's saved data in sessionStorage
if (sessionStorage.getItem("formData")) {
    // If data exists, parse it and fill the form fields
    const formData = JSON.parse(sessionStorage.getItem("formData"));
    firstnameInput.value = formData.firstname || "";
    secondnameInput.value = formData.secondname || "";
    birthdateInput.value = formData.birthdate || "";
    StreetaddressInput.value = formData.Streetaddress || "";
    Suburb_townInput.value = formData.Suburb_town || "";
    postcodeInput.value = formData.postcode || "";
    email_addressInput.value = formData.email_address || "";
    stateInput.value = formData.state || "";
    numberInput.value = formData.number || "";
    genderInput.value = formData.gender || "";
    skill1Input.value = formData.skill1 || "";
    skill2Input.value = formData.skill2 || "";
    otherCheckboxInput.value = formData.otherCheckbox || "";
    otherTextareaInput.value = formData.otherTextarea || "";
}

// Listen for form submission
form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create an object to store form data
    const formData = {
        firstname: firstnameInput.value,
        secondname:secondnameInput.value ,
        birthdate: birthdateInput.value,
        Streetaddress: StreetaddressInput.value,
        Suburb_town: Suburb_townInput.value,
        postcode: postcodeInput.value,
        email_address:  email_addressInput.value,
        state: stateInput.value,
        number:  numberInput.value,
        gender:  genderInput.value ,
        skill1: skill1Input.value ,
        skill2:  skill2Input.value,
        otherCheckbox:otherCheckboxInput.value,
        otherTextarea:otherTextareaInput.value,
    };

    // Save the form data in sessionStorage
    sessionStorage.setItem("formData", JSON.stringify(formData));

    // You can also submit the form here if needed
 form.submit();
});