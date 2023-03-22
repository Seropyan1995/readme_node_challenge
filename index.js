// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');


// added license as const as it is being referenced within the generalMarkdown.js? also seen this online so added it just incase.
const license = ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License','BSD 2-Clause License', 'None']

// created const array with questions for user input
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What would you like to add in descriptions?',
    name: 'description',
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
    choices: license,
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
    choices: ['email','phone','text'],
}
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = './README.md';
    fs.writeFile(fileName, data, function (err){
        err ? console.error(err) : console.log("Successfully Created README.md!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
