const request = require("request");

const getWeather = (lat, lng, cb) => {
    request({
        url : `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`,
        json : true,
        rejectUnauthorized : false
    }, (err, response, body) => {
        if(err) cb(err)
        cb(null, {
            temperature : body.currently.temperature,
            summary : body.daily.summary
        })
    })
}

module.exports = {getWeather}