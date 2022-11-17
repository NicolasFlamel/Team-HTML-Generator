const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions'); // questions for inquirer
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

// list of employees 
const employeeList = [];

function init() {
    fs.copyFile('./src/index.html', './dist/index.html', () => { })
    fs.copyFile('./src/index.css', './dist/index.css', () => { })
    promptUser();
}

// prompt for user input
const promptUser = () => {
    inquirer
        .prompt(questions)
        .then(answers => {
            //employeeList.push(answers);
            console.log('');
            addEmployee(answers);
            if (answers.askAgain) {
                promptUser();
            }
            else
                buildWebsite();
        })
}

const addEmployee = (employee) => {
    const { employeeType, name, id, email } = employee

    switch (employeeList) {
        case 'Intern':
            const { school } = employee
            break;
        case 'Engineer':
            const { github } = employee
            break;
        case 'Manager':
            const { officeNumber } = employee
            break;
    }
}

//builds the website
const buildWebsite = () => {

}

init();