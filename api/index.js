import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
// create application/json parser
const jsonParser = bodyParser.json()

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
    }
});

export default router;