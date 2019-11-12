// Node works with 3 types of module :
// 1. Core Modules : comes along with node installer eg. fs, os, events, http etc

// const os = require("os");

// console.log("CPU's : " + os.cpus().length);
// console.log("Arch : " + os.arch());
// console.log("Total Memory : " + os.totalmem());
// console.log("Free Memory : " + os.freemem());


// const fs = require("fs");
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



// fs.readFile("./cool.txt", (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
//     fs.writeFile("./new-cool.txt", data, (err) => {
//         if(err) console.log(err);
//         console.log("Write successfully!")
//     })
// })

// console.log("Async Read completed");


// const http = require("http");

// const server = http.createServer((request, response) =>{
//     request.on("readable", () => {
//         let chunk = null;
//         while(null != (chunk = request.read())){
//             // code to execute
//         }
//     })

//     response.write("Hello Client!");
//     response.end();
// })

// server.listen(9090);
// console.log("Server listening on Port 9090");














// 2. External Modules : created by community, leveraged by app developers
// > npm install <module_name>

// const chalk = require("chalk");

// console.log(chalk.green("Hello World"));
// console.log(chalk.inverse.green("Hello World"));
// console.log(chalk.underline("Hello World"));
// console.log(chalk.bold("Hello World"));

const yargs = require("yargs");
// console.log(process.argv)
// console.log("________________")
// console.log(yargs.argv);

yargs.command({
    command : "add",
    description : "To add new Title",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "New Title"
        },
        body : {
            type : String,
            demandOption : true,
            description : "New Body"
        }
    },
    handler : (argv) => {
        console.log("TITLE : " , argv.title);
        console.log("BODY : " , argv.body);
    }
})

yargs.parse();


// node app.js add --help
// node app.js add
// node app.js add --title="My Title"
// node app.js add --title="My Title" --body="My Title Body"














// 3. File Modules : developers created modules for achieving specific needs
// const myModule = require("./utils/my-module");
// const { bar, foo } = require("./utils/my-module");

// bar();
// foo();

    // myModule.bar();
    // myModule.foo();

    // myModule.foo();
    // console.log(myModule.MAGIC_NUMBER);










// Notes-App

// READ : node app.js read --title="GROCERY" 
// WRITE :  node app.js read --title="GROCERY" --body="buy pulses"
// LIST : node app.js list
// DELETE: node app.js remove --title="GROCERY"









