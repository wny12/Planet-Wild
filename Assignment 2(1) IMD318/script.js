function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_hzksh8t", "template_tu9hmfr", params)
        .then(function(response) {
            alert("Email Sent!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(function(error) {
            alert("Failed to send email. Please try again.");
            console.error("FAILED...", error);
        });
}
