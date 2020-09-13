//Updates web page in real time based on account creation errors
//All checks take an initially empty element and update text
//if there is an error based on the field
//They also remove the error message if the field is empty as
//empty fields are obviously invalid

//Stephen Nguyen

//Username
//Also checks for availability in db
function usernameCheck(user)
{
	if (user.length === 0 || (user.match(/^[a-zA-z0-9_-]+$|^$/)))
	{
		document.getElementById("userCheck").innerHTML = " ";
	}

	else if (!(user.match(/^[a-zA-z0-9_-]+$|^$/)))
	{
		document.getElementById("userCheck").innerHTML = "Username must only contain letters, numbers, underscores, and dashes.";
	}

	$.post("/users/checkusername", {"username": document.getElementById("username").value}, function (data, status) {
		if (data.value !== 'ok')
		{
			document.getElementById("userCheck").innerHTML = "Username is already taken.";
		}
	});
}

//2nd check may not be needed as html form sets an automatic limit on length
//Due to the large spacing, I am currently only displaying the confirm password error msg
function passwordCheck(pass)
{
    if (pass === document.getElementById("confirmPassword").value)
    {
        document.getElementById("passCheck").innerHTML = " ";
        document.getElementById("confirmCheck").innerHTML = " ";
    }

    else if (pass.length > 64)
    {
        //document.getElementById("passCheck").innerHTML = "Password must be 1 to 64 characters long.";
    }

    else if (pass !== document.getElementById("confirmPassword").value)
    {
        //document.getElementById("passCheck").innerHTML = "Passwords do not match.";
        document.getElementById("confirmCheck").innerHTML = "Passwords do not match.";
    }
}

//Confirm password === password
function confirmPassCheck(pass)
{
    if (pass === document.getElementById("password").value)
    {
        document.getElementById("passCheck").innerHTML = " ";
        document.getElementById("confirmCheck").innerHTML = " ";
    }

    else if (pass !== document.getElementById("password").value)
    {
       // document.getElementById("passCheck").innerHTML = "Passwords do not match.";
        document.getElementById("confirmCheck").innerHTML = "Passwords do not match.";
    }
}

//First name
function firstNameCheck(name)
{
	if (name.length === 0 || (name.match(/^[A-Za-z]+$/)))
	{
		document.getElementById("firstNameCheck").innerHTML = " ";
	}

	else if (!(name.match(/^[A-Za-z]+$/)))
	{
		document.getElementById("firstNameCheck").innerHTML = "First name must only contain letters.";
	}
}

//Last name
function lastNameCheck(name)
{
	if (name.length === 0 || (name.match(/^[A-Za-z_-]+$/)))
	{
		document.getElementById("lastCheck").innerHTML = " ";
	}

	else if (!(name.match(/^[A-Za-z]+$/)))
	{
		document.getElementById("lastCheck").innerHTML = "Last name must only contain letters or dashes.";
	}
}

//License #
function licenseCheck(license)
{
	if (license.length === 0 || (license.match(/^[A-Za-z0-9]+$/)))
	{
		document.getElementById("licenseCheck").innerHTML = " ";
	}

	else if (!(license.match(/^[A-Za-z0-9]+$/)))
	{
		document.getElementById("licenseCheck").innerHTML = "Drivers license can only contain letters and numbers.";
	}
}

//Email
//Does not currently check for "legitimacy"
//i.e. if the email actually exists
function emailCheck(email)
{
	if (email.length === 0 || ((email.includes("@")) && (email.includes("."))))
	{
		document.getElementById("emailCheck").innerHTML = " ";
	}

	//All emails should have @
	else if (!(email.includes("@")) || !(email.includes(".")))
	{
		document.getElementById("emailCheck").innerHTML = "Invalid email.";
	}
}

//Phone #
function phoneCheck(phone)
{
	if (phone.length === 0 || phone.match(/^[0-9_-]+$/))
	{
		document.getElementById("phoneCheck").innerHTML = " ";
	}

	else if (!phone.match(/^[0-9_-]+$/))
	{
		document.getElementById("phoneCheck").innerHTML = "Phone number should only have numbers and dashes.";

	}
}
