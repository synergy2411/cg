// npm install express socket.io mongodb jquery bootstrap --save
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", client =>{
    console.log("New client connected!")
    client.emit("acknowledge", {message : "Now Connected"})

    client.on("MsgToServer", data =>{
        console.log("Client says : " + data.message);
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/client.html");
})

server.listen(9090, () => {
    console.log("Socket server running on port 9090...")
})