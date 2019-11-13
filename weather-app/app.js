const express = require("express");
const app = express();

app.get("/", (request, response) => {
    // response.send({message : "Hello Client"});
    response.sendFile(__dirname+"/public/index.html")
})

app.get("/weather", (request, response) => {
    if(request.query){
        console.log("Address : ", request.query.txtAddress)
    }
    response.send({message : "API Hit"});
})

app.listen(9000, () => {
    console.log("Express server started at Port 9000...");
})

// npm install express request --save
// http://localhost:9000
// http://localhost:9000/weather
// npm install nodemon -g
// nodemon app.js