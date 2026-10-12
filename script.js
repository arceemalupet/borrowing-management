
const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboardApp = document.getElementById("dashboardApp");
const forgotPassword = document.getElementById("forgotPassword");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        loginPage.hidden = true;
        dashboardApp.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

if (forgotPassword) {
    forgotPassword.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Please contact the system administrator to reset your password.");
    });
}