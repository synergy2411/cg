const yargs = require("yargs");
const notes = require("./utils/notes");

// Adding new Note
yargs.command({
    command : "add",
    description : "To add new note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "New title to add"
        },
        body : {
            type : String,
            demandOption : true,
            description : "New body to add"
        }
    },
    handler : argv => {
        notes.addNote(argv.title, argv.body)
    }
})

// Read one note
yargs.command({
    command : "read",
    description : "To read a note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "New title to add"
        }
    },
    handler : argv => {
        // console.log("Title :", argv.title)
        notes.readNote(argv.title);
    }
})

// Removing one note

yargs.command({
    command : "remove",
    description : "To remove a note",
    builder : {
        title : {
            type : String,
            demandOption : true,
            description : "New title to add"
        }
    },
    handler : argv => {
        notes.removeNote(argv.title);
    }
})

// List All Notes

yargs.command({
    command : "list",
    description : "To read a note",
    handler : argv => {
        notes.listNote();
    }
})


yargs.parse();



// Notes-App

// WRITE :  node app.js add --title="GROCERY" --body="buy pulses"
// READ : node app.js read --title="GROCERY" 
// LIST : node app.js list
// DELETE: node app.js remove --title="GROCERY"