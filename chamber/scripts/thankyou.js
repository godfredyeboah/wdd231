// Function to display submitted form data
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const detailsContainer = document.getElementById("submission-details");

    if (params.toString() === "") {
        detailsContainer.innerHTML = "<p>No submission data found.</p>";
        return;
    }

    let output = "<ul>";
    params.forEach((value, key) => {
        // Format key names properly
        let formattedKey = key.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
        output += `<li><strong>${formattedKey}:</strong> ${value}</li>`;
    });
    output += "</ul>";

    detailsContainer.innerHTML = output;
});
