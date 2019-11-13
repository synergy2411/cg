const mongodb = require("mongodb");
const client = mongodb.MongoClient;
let _db;

const connect = () => {
    client.connect("mongodb://localhost:27017",{
        useNewUrlParser : true,
        useUnifiedTopology: true
    }, (err, mongo) => {
        if(err){
            process.exit(1);
            console.log(err);
        }
        console.log("Mongo Connected!");
        _db = mongo.db("cg_db");
        // insertDoc();
        // findDoc()
        // deleteDoc();
        updateDoc();
    })

    // client.connect("mongodb://synergy:krsna123@ds117316.mlab.com:17316/db_name", {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }, (err, mongo) => {
    //     if(err){
    //         console.log(err)
    //         process.exit(1);
    //     }
    //     console.log("Mongo Connected");
    // })
}

connect();


const insertDoc = () => {
    _db.collection("users").insertOne({
        "username" : "bar",
        "password" : "bar123"
    }, (err, result)=>{
        if(err) console.log(err)
        console.log("[RESULT]",result);
    })
}

const findDoc= () => {
    _db.collection("users").find({"username" : "bar"}).toArray((err, docs) => {
        if(err) console.log(err);
        console.log(docs);
    })
} 

const deleteDoc =() =>{
    _db.collection("users").deleteOne({"username" : "bar"}, (err, result) =>{
        if(err) console.log(err)
        console.log("Deleted Successfully");
    })
}

const updateDoc = () => {
    _db.collection("users").updateOne({"username" : "foo"}, {
        $set : { password : "pass123456"}
    }, (err, status) => {
        if(err) console.log(err);
        console.log("Record Updated.", status.result.ops)
    })
}

