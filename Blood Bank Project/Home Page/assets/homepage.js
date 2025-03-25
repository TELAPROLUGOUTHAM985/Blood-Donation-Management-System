document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("services").addEventListener("click", function (event) {
        // Check if a button was clicked
        if (event.target.tagName === "BUTTON") {
            let role = event.target.getAttribute("data-role"); // Get role
            let action = event.target.getAttribute("data-action"); // Get action

            // Define redirection paths
            let pages = {
                admin: { login: "/connectivity/public/adminLogin.html", signup: "/connectivity/public/register.html" },
                donor: { login: "/connectivity/public/login.html", signup: "/connectivity/public/register.html" },
                patient: { login: "/connectivity/public/patientLogin.html", signup: "/connectivity/public/patientRegister.html" }
            };

            // Redirect to the corresponding page
            if (pages[role] && pages[role][action]) {
                window.location.href = pages[role][action];
            }
        }
    });
});
