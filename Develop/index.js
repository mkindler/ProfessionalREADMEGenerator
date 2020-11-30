// require specific npm packages
const fs = require("fs");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process of dependencies for this project. The typical command used is npm i."
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repository?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repository?"
    },
    {
        type: "input",
        name: "testing",
        message: "What command is needed to run testing? The typical command used is npm test."
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["Apache", "BSD", "GPL", "MIT", "Other", "None"]
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("README generating, please wait...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
