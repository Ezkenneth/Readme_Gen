const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown')

// array of questions for user

const questions = [
    
    {
        type: "input",
        name: "title",
        message: "Project Title",
      },
      {
        type: "input",
        name: "description",
        message: "description",
      },
      {
        type: "input",
        name: "install",
        message: "Installaion",
      },
      {
        type: "input",
        name: "usage",
        message: "How to Use",
      },
      {
        type: "input",
        name: "test",
        message: "Test Instructions ",
      },
      {
        type: "input",
        name: "contributing",
        message: "Contribution Guidelines",
      },
      {
        type: "list",
        message: "License?",
        name: "license",
        choices: [
          "MIT", "ISC", "IBM"],
      },
      {
        type: "input",
        name: "github",
        message: "Github UserName",
      },
      {
        type: "input",
        name: "email",
        message: "E-Mail",
      },

];


    // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your file is ready!");
    })
}
// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("TestREADME.md", generateMarkdown(data));
    })

}

// function call to initialize program
init();



 
