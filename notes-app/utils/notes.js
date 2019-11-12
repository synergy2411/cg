const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try {
        let notesBuffer = fs.readFileSync("notes.json");
        let notesString = notesBuffer.toString();
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
}

const saveNotes = (notes) => { 
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log(chalk.green("Note Updated Successfully!"))
}

const addNote = (title, body) => { 
    const allNotes = loadNotes();
    const duplicateNotes = allNotes.filter(note => note.title === title);
    if(duplicateNotes.length === 0){
        allNotes.push({title, body});    
        saveNotes(allNotes);
    }else{
        console.log(chalk.red("Duplicate Title. Try Again!"))
    }
}

const removeNote = (title) => { 
    const allNotes = loadNotes();
    const duplicateNotes = allNotes.filter(note => note.title !== title);
    if(duplicateNotes.length === allNotes.length){
        console.log(chalk.red("Note not found. Try Again!"))
    }else{
        saveNotes(duplicateNotes)
    }
}

const readNote = (title) => { 
    const allNotes = loadNotes();
    const duplicateNotes = allNotes.filter(note => note.title === title);
    if(duplicateNotes.length === 0){
        console.log(chalk.red("Note not found. Try Again!"))
    }else{
        console.log(chalk.blue("Found Note"))
        console.log(chalk.grey("*************************"))
        console.log(chalk.grey("Title : " + duplicateNotes[0].title))
        console.log(chalk.grey("Body : " + duplicateNotes[0].body))
    }
}

const listNote = () => { 
    const allNotes = loadNotes();
    console.log(chalk.blue("Loading All Notes"))
    console.log(chalk.grey("*************************"))
    allNotes.forEach(note => {
        console.log(chalk.grey("Title : " + note.title))
        console.log(chalk.grey("Body : " + note.body))
        console.log(chalk.blue("_______________________"))
    })
}

module.exports = {
    addNote, removeNote, readNote, listNote
}