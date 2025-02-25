document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(this);
    const status = document.getElementById("status");

    // Use FormSubmit (a free backend to send form data via email)
    fetch("https://formsubmit.co/favourmorayooluwa@gmail.com", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            status.innerHTML = "✅ Message Sent Successfully!";
            this.reset(); // Clear form
        } else {
            status.innerHTML = "❌ Error sending message. Try again.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        status.innerHTML = "❌ Network error. Please try again.";
    });
});

