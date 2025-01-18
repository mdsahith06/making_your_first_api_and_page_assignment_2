// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get('/status-info',(req,res)=>{
  const statusCode = parseInt(req.query.code);
  if(statusCode == 200){
    obj = {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
    }
    res.send(obj);
  } else if(statusCode == 201){
    obj = {
    "status": 201,
    "message": "A resource has been successfully created"
    }
    res.send(obj);
  }else if(statusCode == 204){
    obj = {
    "status": 204,
    "message": "Request processed successfully, no content returned."
    }
    res.send(obj);
  }else if(statusCode == 400){
    obj = {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
    }
    res.send(obj);
  }else if(statusCode == 401){
    obj = {
    "status": 401,
    "message": "Authentication is required to access the resource."
    }
    res.send(obj);
  }else if(statusCode == 403){
    obj = {
    "status": 403,
    "message": "Server refuses to authorize the request."
    }
    res.send(obj);
  }else if(statusCode == 404){
    obj = {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
    }
    res.send(obj);
  }else if(statusCode == 405){
    obj = {
    "status": 405,
    "message": "HTTP method not supported for this resource."
    }
    res.send(obj);
  }else if(statusCode == 429){
    obj = {
    "status": 429,
    "message": "User has exceeded rate limits"
    }
    res.send(obj);
  }else if(statusCode == 500){
    obj = {
    "status": 500,
    "message":  "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
    }
    res.send(obj);
  }else if(statusCode == 502){
    obj = {
    "status": 502,
    "message": "The server received an invalid response from the upstream server."
    }
    res.send(obj);
  }else if(statusCode == 503){
    obj = {
    "status": 503,
    "message": "Server temporarily overloaded or under maintenance."
    }
    res.send(obj);
  }else if(statusCode == 504){
    obj = {
    "status": 504,
    "message": "The server did not receive a timely response from the upstream server."
    }
    res.send(obj);
  }
 
 
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});