//This file was derived from https://github.com/upedu/Unify

/**
 * data.js module
 *
 * @author Spencer Rose
 * @author Jason Twigg
 * @author Maximilian Puglielli
 * @author Stelios Papoutsakis
 *
 * @version 04/05/2020
 *
 * @description This module holds all post routers which modify or alter the
 * database.
**/

const express   = require('express');
const dbms      = require('../db_api/dbms');
const router    = express.Router();
const steam_api = require('steam_api');
const dbutils   = require('../db_api/dbutils');


/** FOR TESTING PURPOSES ONLY
 *
 * @author Maximilian Puglielli
 *
 * POST PARAMETERS FROM THE CLIENT:
 * @param {string} str
 *
 * @description This router is associated with the test() function in dbutils.js.
 * It is only meant for testing.
 *
 * CLIENT SIDE POST FUNCTION:
 * $.post("data/encrypt",
 * {
 *     "str": ?
 * },
 * data =>
 * {
 *     console.log("DATA:");
 *     console.log(data);
 * });
 *
**/
// router.post('/encrypt',
// (req, res) =>
// {
// 	console.log("ENCRYPT ROUTER");
// 	console.log("Test String: " + req.body.str);
// 	dbutils.encrypt(req.body.str)
// 	.then(rtn =>
// 	{
// 		console.log(rtn);
// 		res.send(rtn);
// 	})
// 	.catch(err =>
// 	{
// 		console.trace("ERROR in data.js in /encrypt; " + err);
// 	})
// });



/** FOR TESTING PURPOSES ONLY
 *
 * @author Maximilian Puglielli
 *
 * POST PARAMETERS FROM THE CLIENT:
 * @param {string} str
 * @param {string} hashedStr
 *
 * @description This router is associated with the test() function in dbutils.js.
 * It is only meant for testing.
 *
 * CLIENT SIDE POST FUNCTION:
 * $.post("data/compare",
 * {
 *     "str": ?,
 *     "hashedStr": ?
 * },
 * data =>
 * {
 *     console.log("DATA:");
 *     console.log(data);
 * });
 *
**/
// router.post('/compare',
// (req, res) =>
// {
// 	console.log("COMPARE ROUTER");
// 	console.log("Test String: " + req.body.str);
// 	console.log("Test Hash: " + req.body.hashedStr);
// 	dbutils.compare(req.body.str, req.body.hashedStr)
// 	.then(rtn =>
// 	{
// 		console.log(rtn);
// 		res.send(rtn);
// 	})
// 	.catch(err =>
// 	{
// 		console.trace("ERROR in data.js in /compare; " + err);
// 	})
// });



/*
This is only for DEBUGGING
This prints errors to the server console, should be taken out when in release
*/
router.use(err =>
{
	if (err)
		console.log('Error', err);
	else
		console.log('404');
});
module.exports = router;
