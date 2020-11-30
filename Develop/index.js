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
        message: "Describe the installation process of dependencies for this project:"
    }
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["Apache", "BSD", "GPL", "MIT", "Other", "None"]
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
