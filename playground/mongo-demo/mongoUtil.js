const mongodb = require("mongodb");
const client = mongodb.MongoClient;

const connect = () => {
    // client.connect("mongodb://localhost:27017",{
    //     useNewUrlParser : true
    // }, (err, mongo) => {

    // })

    client.connect("mongodb://synergy:krsna123@ds117316.mlab.com:17316/db_name", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, mongo) => {
        if(err){
            console.log(err)
            process.exit(1);
        }
        console.log("Mongo Connected");
    })
}

connect();

// module.exports = {
//     connect
// }