document.addEventListener("DOMContentLoaded", () => {
    // Set the timestamp when the page loads
    document.getElementById("timestamp").value = new Date().toISOString();

    // Animate membership cards on page load
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("fade-in");
        }, index * 200); // Staggered animation effect
    });
});

// Function to open modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = (event) => {
    document.querySelectorAll(".modal").forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};


document.addEventListener("DOMContentLoaded", () => {
    // Animate membership cards on page load
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target); // Stops observing once animation is applied
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});



