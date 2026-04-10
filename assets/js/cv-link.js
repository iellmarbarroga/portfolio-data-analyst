// cv-link.js
const cvLink = "https://drive.google.com/drive/folders/13eSRJPlFaH1JsJkGJb31ZC_9hM_bLaku";

// Function to set the CV link dynamically
function setCVLink() {
    const cvElements = document.querySelectorAll('.cv-link');
    cvElements.forEach(element => {
        element.href = cvLink;
    });
}

// Run the function when the page loads
window.onload = setCVLink;
