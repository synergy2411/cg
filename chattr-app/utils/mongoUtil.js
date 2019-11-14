const mongo = require("mongodb");
const client = mongo.MongoClient;
let _db;

const connect = () => {
    client.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, mongo) => {
        if (err) process.exit(1);
        console.log("Mongo Connected!")
        _db = mongo.db("chattr")    
    })
}

const insertChat = ({ name, messages }) => {
    _db.collection("chats").insert({name, messages}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        console.log("Record Inserted!")
    })
}

module.exports = { connect, insertChat }