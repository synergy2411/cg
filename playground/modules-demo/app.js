// Node works with 3 types of module :
// 1. Core Modules : comes along with node installer eg. fs, os, events, http etc

// const os = require("os");

// console.log("CPU's : " + os.cpus().length);
// console.log("Arch : " + os.arch());
// console.log("Total Memory : " + os.totalmem());
// console.log("Free Memory : " + os.freemem());


const fs = require("fs");
// const readStream = fs.createReadStream("./cool.txt");

// readStream.on("readable", () => {
//     let chunk = null;
//     while (null !== (chunk = readStream.read())) {
//         console.log(chunk.toString());
//     }
// })
// const writeStream = fs.createWriteStream("./new-cool.txt");
// readStream.pipe(writeStream);

// const fileBuffer = fs.readFileSync("./cool.txt");
// console.log(fileBuffer.toString());
// console.log("Read operation completed.");



fs.readFile("./cool.txt", (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString())
    fs.writeFile("./new-cool.txt", data, (err) => {
        if(err) console.log(err);
        console.log("Write successfully!")
    })
})

console.log("Async Read completed");






    // 2. External Modules : created by community, leveraged by app developers
        // > npm install <module_name>
    // 3. File Modules : developers created modules for achieving specific needs