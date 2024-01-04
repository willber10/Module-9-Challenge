// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Name? This will be the title of your README.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Project Description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Usage Information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution Guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test Instructions?',
        name: 'testInstructions'
    },
    {
        type: 'input',
        message: 'Installing Instructions?',
        name: 'install'
    },
    {
        type: 'list',
        message: 'Select a License for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        message: 'GitHub Username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email Address?',
        name: 'email'
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('export/README.md', data);
    });

}

// Function call to initialize app
init();
