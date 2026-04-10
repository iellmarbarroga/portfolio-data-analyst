// cv-link.js
const cvLink = "https://drive.google.com/file/d/12Ew_M5QRuxzkUUiNXgeELAttzzCcswG2/view";

// Function to set the CV link dynamically
function setCVLink() {
    const cvElements = document.querySelectorAll('.cv-link');
    cvElements.forEach(element => {
        element.href = cvLink;
    });
}

// Run the function when the page loads
window.onload = setCVLink;
