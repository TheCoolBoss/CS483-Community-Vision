//JS for login page
$(document).ready(function(){
    $("#homeButton").click(function(){
        window.location.href = "index.html"
    });
});

function goToHome(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    $.post("/loginAttempt", {"username": username, "password": password},
        function(data, status)
        {
            //If the data is an error message, show it on the login page
            //Do not advance to home page
            if (!(data.msg === "success"))
            {
                showError(data.msg);
            }
            else if(data.msg === "success")
            {
                window.location.href = "index.html";
            }
            else {
                //window.location.href = "index.html";
            }
        });

}

//Changes the empty p element to an error message when appropriate
function showError(data)
{
    document.getElementById("loginCheck").innerHTML = data;
}

function goToAccountCreation() {
    window.location.href = "accountCreationPage.html";
}