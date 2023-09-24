  $(document).ready(function () {
    $(".open_close_nav").click(function () {
      $(".responsive_nav_bar").toggleClass("responsive_bar");
  });
  });

  // const applyButtons = document.querySelectorAll(".apply-button");
  // applyButtons.forEach(button => {
  //     button.addEventListener("click", function() {
  //         const referenceNumber = this.getAttribute("data-reference");
  //         localStorage.setItem("referenceNumber", referenceNumber);

  //         // Update the reference number in the job listing
  //         document.getElementById("referenceNumber").textContent = referenceNumber;
  //     });
  // });

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