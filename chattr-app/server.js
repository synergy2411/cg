// npm install express socket.io mongodb --save
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const mongoUtil = require("./utils/mongoUtil");

let name ="";
let messages = [];

io.on("connection", client =>{
    mongoUtil.connect();
    console.log("New client connected!")
    client.emit("acknowledge", {message : "Now Connected"})

    client.on("MsgToServer", ({chatterName, message}) =>{
        console.log(chatterName + " says : " + message);
        name = chatterName;
        messages.push(message);
        client.emit("MsgToClient", {chatterName : "Me", message});
        client.broadcast.emit("MsgToClient", {chatterName, message});
    })

    client.on("disconnect", () => {
        mongoUtil.insertChat({name, messages});
        console.log("DISCONNECT");
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/client.html");
})

server.listen(9090, () => {
    console.log("Socket server running on port 9090...")
})