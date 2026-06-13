function sendMail() {
    let parms = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value
    };

    emailjs.send("service_7k94gx3", "template_yy71jx9", parms)
    .then(() => {
        alert("Message Sent Successfully!");

        document.getElementById("contact-name").value = "";
        document.getElementById("contact-email").value = "";
        document.getElementById("contact-subject").value = "";
        document.getElementById("contact-message").value = "";
    });
}