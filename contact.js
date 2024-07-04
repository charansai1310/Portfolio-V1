emailjs.init({
  publicKey: "7dRefeCZOC9EsNRni",
});
document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the form data
      const userName = document.getElementById("name").value;
      const userEmail = document.getElementById("email").value;
      const userMessage = document.getElementById("message").value;

      // Send notification email to yourself
      emailjs
        .send("contact_service", "contact_form", {
          user_name: userName,
          user_email: userEmail,
          message: userMessage,
        })
        .then(
          function (response) {
            console.log(
              "Notification email sent successfully",
              response.status,
              response.text
            );
          },
          function (error) {
            console.error("Failed to send notification email", error);
          }
        );

      // Send acknowledgment email to the user
      emailjs
        .send("contact_service", "contact_reply", {
          user_name: userName,
          user_email: userEmail,
          message: userMessage,
        })
        .then(
          function (response) {
            console.log(
              "Acknowledgment email sent successfully",
              response.status,
              response.text
            );
          },
          function (error) {
            console.error("Failed to send acknowledgment email", error);
          }
        );

      // Clear the form
      document.getElementById("contact-form").reset();
    });
});
