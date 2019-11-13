const request = require("request");

const geocode = (address, cb) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAOIA3C43yp1OJPtEIMVNmdWpc_v5ecXx0`,
        json: true,
        rejectUnauthorized : false
    }, (error, response, body) => {
        if (error) cb(error)
        if (body.status === "OK") {
            cb(null, {
                formatted_address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            })
        }else{
            cb(body.status)
        }
    })
}
module.exports = { geocode };
