const express = require("express");
const geocoder = require("./utils/geocoder");
const forecast = require("./utils/forecast");

const app = express();

app.get("/", (request, response) => {
    // response.send({message : "Hello Client"});
    response.sendFile(__dirname + "/public/index.html")
})

app.get("/weather", (request, response) => {
    if (request.query) {
        geocoder.geocode(request.query.txtAddress, (err, {lat, lng, formatted_address}) => {
            if (err) return response.send({ message: err });
            
            forecast.getWeather(lat, lng, (err, {summary, temperature})=>{
                if (err) return response.send({ message: err });
                else  return response.send({
                    message : `
                        Hello! At ${formatted_address}, the current temperature is ${temperature}F.
                        It seems like ${summary}.
                    `
                })
            })
        })
    }
    // response.send({ message: "API Hit" });
})

app.listen(9000, () => {
    console.log("Express server started at Port 9000...");
})

// npm install express request --save
// http://localhost:9000
// http://localhost:9000/weather
// npm install nodemon -g
// nodemon app.js