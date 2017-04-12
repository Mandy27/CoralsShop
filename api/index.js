import bodyParser from 'body-parser';
import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();
// create application/json parser
const jsonParser = bodyParser.json();

let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	mdb = db;
});

function sendResponse(statusCode, message, response){
	response.status(statusCode).send(message);
}

function sendObjectResponse(statusCode, object, response){
	response.status(statusCode).send(object);
}

router.post('/user',jsonParser,(req,res)=>{
    if(!req.body.email){
		sendResponse(400, "Email is required", res);
		res.end();
		return;
	}
    if(!req.body.password){
		sendResponse(400, "Password is required", res);
		res.end();
		return;
	}
    if(req.body.email==="minhton@gmail.com" && req.body.password==="minhtonpassword"){
        sendResponse(200,"SUCCESS",res);
    }else{
		sendResponse(200,"FAIL",res);
	}
});

export default router;