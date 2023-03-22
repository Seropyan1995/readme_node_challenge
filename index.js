// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'name',
},
{
    type: 'input',
    message: 'What would you like to add in descriptions?',
    name: 'description',
},
{
    type: 'input',
    message: 'Insert your table of contents!',
    name: 'table of content',
},
{
    type: 'input',
    message: 'What is needed for installation for this to work?',
    name: 'installation',
},
{
    type: 'input',
    message: 'what is the usage for this repo?',
    name: 'usage',
},
{
    type: 'checkbox',
    message: 'pick license that you wish to use!',
    name: 'license',
    choices: ['MIT License','Apache License 2.0','GNU General Public License v3.0','Boost Software License 1.0', 'None']
},
{
    type: 'input',
    message: 'Who contributed to this repo?',
    name: 'contribute',
},
{
    type: 'input',
    message: 'what different tests can be made with code examples?',
    name: 'tests',
},
{
    type: 'list',
    message: 'if you have any questions pick from the list of contact methods!',
    name: 'questions',
    choices: ['email','phone','text']
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = './README.md';
    fs.writeFile(fileName, data, function (err){
        err ? console.error(err) : console.log(fileName + " Successfully Created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
