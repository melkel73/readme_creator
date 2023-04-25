// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var licenseBdg =[ {bdgName: ' ISC', bdglink: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'},
{bdgName: ' MIT', bdglink: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'},
{bdgName: 'Mozilla', bdglink: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'},
]
//var jsrender = require('jsrender');
//const template =  jsrender.templates('../readme_creator/readme-template.txt');
//let bodyContent = decoder.decode(template);

//end of readme

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your application?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide the installation instructions for your application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information for your application?',
      },
      {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines for your application?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions for your application?',
      },
      {
        type: 'list',
        message: 'Select License type',
        name: 'license',
        choices: ['ISC', 'MIT', 'Mozilla'],
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        let bodyContent = `# ${response.title} \n ## Description \n ${response.description} \n ## Table of contents \n 1. [Instructions](#instructions)\n 2. [Usage](#usage)\n 3. [Guidelines](#guidelines)\n 4. [License](#license)\n 5. [Testing](#testing)\n 6. [Questions](#questions)\n ## Instructions\n ${response.instructions} \n ## Usage\n ${response.usage} \n ## Guidelines\n ${response.guidelines} \n ## License\n ${response.license} \n ## Testing \n ${response.test}\n ## Questions?\n Please inquire here: www.github.com/${response.username} \n or here ${response.email}`;
         writeToFile(bodyContent);
    })
}

// Function call to initialize app
//init();

function writeToFile(bodyContent) {
    fs.writeFile('NEW-README.md', `${bodyContent}\n`, (err) =>
  // Ternary operator takes in a condition followed by a question mark (?)
  // then an expression to execute if the condition is truthy followed by a colon (:)
  // and finally the expression to execute if the condition is falsy.
  // This operator is frequently used as a shortcut for the if statement.
  err ? console.error(err) : console.log('Commit logged!')
);
}

function readTemplate() {
    fs.readFile('readme-template.txt', 'utf8', (error, data) =>
  error ? console.error(error) : writeToFile(data) //console.log(data)
);

}

init();

//readTemplate();