//This file was derived from https://github.com/upedu/Unify

/**
 i* @author ???
 * @author ???
 * @author ???
 * @author Maximilian Puglielli
 *
 * @version 04/20/2020
 *
 * @description users module
**/

const express = require('express');
const router = express.Router();
const utils = require("../db_api/dbutils");
const { check, validationResult } = require('express-validator');
const dbms = require('../db_api/dbms');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

/*
Below are routes for local users
*/

// checks if a username is already taken
// rejects promise if username is aready in database
function is_username_taken(username) {
	let db_query = `SELECT COUNT(Username) from ACCOUNTS where Username="${username}"`;
	return new Promise((resolve, reject) => {
		dbms.dbquery(db_query)
			.then(result => {
				if (result[0]['COUNT(Username)'] > 0) {
					reject({
						value: username,
						msg: 'username already taken',
						param: 'username',
						location: 'body',
					});
				}
				resolve();
			});
	});
}


// returns users username in a json object from a dbquery
router.post('/getuserinfo', (req, res) => {
	//cookie is automatically sent with each post request -> access with req.userid (cookie only contains the userid (see app.js))
	let db_query = `SELECT Username, Balance FROM ACCOUNTS WHERE User_ID_Tag= "${req.userid}"; `; //Get User's username with UserID(from cookie)

	dbms.dbquery(db_query) //query is sent
		.then(result => {
			// helpful testing statements: console.log(result[0].Username); //{Username: "ben", Balance: 0}

			const data = {
				Username: result[0].Username
			};

			res.json(data); //returns Username to the client side js file that made this $.post request
		})
		.catch((err) => { console.log(err); });
});

/**
 * @author ???
 *
 * @description sends a json object that specifies if a username is already taken
 *
 * POST PARAMETERS FROM THE CLIENT
 * @param {string} username
 *
 * POST REQUEST FUNCTION
 * $.post("users/checkusername",
 * {
 *     "username": ?
 * },
 * data =>
 * {
 *     // INSERT CODE HERE
 *     console.log("DATA:");
 *     console.log(data);
 * });
**/

router.post('/checkusername', (req, res) => {
	utils.isUsernameTaken(req.body.username)
		.then(result => {
			if (result.message === "There does exist an account with the username: " + req.body.username) {
				res.json({ value: "not ok" });
			}

			else if (result.message === `There exists no account with the username: ${req.body.username}`) {
				res.json({ value: "ok" });
			}

		})
		.catch(error => {
			res.json(error);
		});
});


/**
 * @author ???
 *
 * @description ;
 *
 * POST PARAMETERS FROM THE CLIENT
 * @param {string} username
 * @param {string} password
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 *
 * POST REQUEST FUNCTION
 * $.post("users/newuser",
 * {
 *     "username": ?,
 *     "password": ?,
 *     "firstname": ?,
 *     "lastname": ?,
 *     "email": ?
 * },
 * data =>
 * {
 *     // INSERT CODE HERE
 *     console.log("DATA:");
 *     console.log(data);
 * });
**/
router.post('/newuser', [
	// using expresses builtin sanitizer
	check('username').trim()
		.isLength({ min: 1, max: 32 }).withMessage('Username must between 1 and 32 characters.')
		.matches(/^[a-zA-z0-9_-]+$|^$/).withMessage('Username can only contain letters, underscores, dash character, and numbers.'),
	check('password', 'Password must be between 1 and 64 characters.').trim()
		.isLength({ min: 1, max: 64 }),
	check('firstname').trim()
		.isLength({ min: 1, max: 32 }).withMessage('First name must be between 1 and 32 characters.')
		.matches(/^[a-zA-z]+$|^$/).withMessage('First name can only contain letters.'),
	check('lastname').trim()
		.isLength({ min: 1, max: 32 }).withMessage('Last Name must be between 1 and 32 characters.')
		.matches(/^[a-zA-z]+(-[a-zA-z]+)*$|^$/).withMessage('Last name can only contain letters and hyphens.'),
	check('email', 'Invalid email.').isEmail().normalizeEmail()
],

	// call back function

	(req, res) => {
		const errors = validationResult(req);
		if (errors.errors.length > 0) {
			//send errors back
			res.json(errors);
		} else {
			let user_id;
			let CSGO_id = "730";
			utils.isUsernameTaken(req.body.username)
				.then(() => {			// query is successfull, make call to create user
					// 	dbms.dbquery(`INSERT INTO ACCOUNTS (Username,Passwrd,First_Name,Last_Name,Email) VALUES
					// ("${req.body.username}","${req.body.password}","${req.body.firstname}","${req.body.lastname}","${req.body.email}"
					// );`)
					utils.addNewUser(req.body.username, req.body.password, req.body.firstname, req.body.lastname, req.body.email)

						// now we want to get the user_ID_tag of this newly created user
						.then(result => { return dbms.dbquery(`SELECT (User_ID_Tag) FROM ACCOUNTS WHERE Username= "${req.body.username}";`); })

						.then(() => {
							// if succesfull, we want to redirect to the home page, as the user is logged in
							// we also want to make a cookie to save the user id from the accounts table

							const options = {
								//expire after 2 days
								maxAge: 1000 * 60 * 60 * 48,
								httpOnly: true,
								signed: false
							};
							res.cookie('unify-cookie', user_id, options);
							// sending back a line for client side to redirect to
							res.json({ redirect: '/steamLogin.html' });
						})
						.catch(err => { console.trace("error in new account creation"); });
				})
				// error, the username was already in data base
				.catch(username_error => {
					res.json(username_error);
				});
		}
	});


/**
 * @author ???
 *
 * @description ;
 *
 * POST PARAMETERS FROM THE CLIENT
 * @param {} ?
 *
 * POST REQUEST FUNCTION
 * $.post("user/updateuser",
 * {
 *     ?
 * },
 * data =>
 * {
 *     // INSERT CODE HERE
 *     console.log("DATA:");
 *     console.log(data);
 * });
 *
 * @todo this router is not completed
**/
router.post('/updateuser', [
	// using expresses builtin sanitizer
	check('username').trim().escape(),
	check('password').trim().escape(),
	check('firstname').trim().escape(),
	check('lastname').trim().escape(),
	check('email').isEmail().normalizeEmail(),
	check('birthday').trim().escape(),
	check('residency').trim().escape(),
	check('license').isNumeric().trim().escape(),
	check('steamid').isNumeric().trim().escape()
], (req, res) => {
	console.log(req.body);
	var query = 'update ACCOUNTS set Username = \'';
});



/**
 * @author ???
 *
 * @description ;
 *
 * POST PARAMETERS FROM THE CLIENT
 * @param {number} user
 * @param {string} phone
 * @param {string} name
 * @param {string} email
 * @param {string} dob
 *
 * POST REQUEST FUNCTION
 * $.post("user/editInfo",
 * {
 *     "user":  ?,
 *     "phone": ?,
 *     "name":  ?,
 *     "email": ?,
 *     "dob":   ?
 * },
 * data =>
 * {
 *     // INSERT CODE HERE
 *     console.log("DATA:");
 *     console.log(data);
 * });
**/
router.post("/editInfo", (req, res) => {
	//Make sure the user exists in db
	utils.isUserInDb(req.body.user)
		.then(() => {
			//Since some fields may have been empty, each one must be updated individually if it wasn't empty
			//Per the db team's goals, all queries have been moved to dbutils.js, and exported properly
			//If the field was empty, the column is not updated
			//The db does not support an address field, so no functionality for that is added yet
			if (req.body.phone.length !== 0) {
				utils.updatePhone(req.body.user, req.body.phone);
			}

			if (req.body.name.length !== 0) {
				utils.updateName(req.body.user, req.body.name);
			}

			if (req.body.email.length !== 0) {
				utils.updateEmail(req.body.user, req.body.email);
			}

			if (req.body.dob.length !== 0) {
				utils.updateDob(req.body.user, req.body.dob);
			}
			res.json({ redirect: "/index.html" });
		})
		.catch(() => {
			res.json({ msg: "invalid user" });
		})
});

router.post("/getId", (req, res) => {
	res.json({ id: req.userid });
});

module.exports = router;
