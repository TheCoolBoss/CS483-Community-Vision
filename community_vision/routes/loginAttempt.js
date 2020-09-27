//This file was derived from https://github.com/upedu/Unify

/**
 * @author ???
 * @author ???
 * @author ???
 * @author Maximilian Puglielli
 *
 * @version 04/20/2020
 *
 * @description loginAttempt module
**/

const express = require('express');
const router  = express.Router();
const dbms    = require('./dbms');
const users   = require('./users');
const utils   = require('../db_api/dbutils');
const check   = require('express-validator').check;



// MSP 04/20/2020
//
//Routes for login attempts
// router.post('/', (req, res) =>
// {
// 	utils.checkPassword(req.body.username, req.body.password)
// 		//Cooke code derived from users.js
// 		.then(result => {return dbms.dbquery(`SELECT (User_ID_Tag) FROM ACCOUNTS WHERE Username= "${req.body.username}";`);})
//
// 		.then(result =>
// 		{
// 			const id = result[0]["User_ID_Tag"];
// 			const options = {
// 				//expire after 2 days
// 				maxAge: 1000 * 60 * 60 * 48,
// 				httpOnly: true,
// 				signed: false
// 			};
// 			res.cookie('unify-cookie', id, options);
// 			res.json({msg: "success"});
// 		})
// 		.catch (error =>
// 		{
// 			res.json(error);
// 		})

// });



router.post("/",
(req, res) =>
{
	console.log("ATTEMPTING TO LOG IN");
	utils.checkPassword(req.body.username, req.body.password)
	.then(rtn =>
	{
		// CORRECT USERNAMD AND PASSWORD
		if (rtn.successful)
		{
			utils.getUserID(req.body.username)
			.then(userID =>
			{
				res.cookie("unify-cookie", userID,
				{
					maxAge: 1000 * 60 * 60 * 48,
					httpOnly: true,
					signed: false
				});
				res.send(
				{
					"msg": "success"
				});
			})
			.catch(err =>
			{
				console.trace("ERROR in loginAttempt.js in the login attempt "+
					"router; " + err);
			});
		}
		// CORRECT USERNAME AND INCORRECT PASSWORD
		else if (rtn.incorrectPassword)
			res.send(
			{
				"msg": "The input password is incorrect"
			});
		// UNKNOWN USERNAME
		else if (rtn.unknownUsername)
			res.send(
			{
				"msg": "An account with the input username does not exist"
			});
		else
		{
			console.trace("ERROR in loginAttempt.js in the login attempt router; "+
				"checkPassword() returned a corrupted JSON Object");
		}
	})
	.catch(err =>
	{
		console.trace("ERROR in loginAttempt.js in the login attempt router; "
			+ err);
		res.json({
			"msg": `ERROR in loginAttempt.js in the login attempt router; ${err}`
		});
	})
});

module.exports = router;
