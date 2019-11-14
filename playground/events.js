const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

// - emit : to produce custom events
// - on : to handle the triggered event


function handler(data){
    if(data){
        return console.log("Handler function called with " + data.message);
    }
    console.log("Handler fired!")
}

emitter.on("foo", handler);

emitter.on("foo", () => {
    console.log("Foo Event Fired!");    
})

emitter.on("bar", handler);

emitter.emit("foo");
emitter.emit("bar", {message : "Hello from Bar"});