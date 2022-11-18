const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions'); // questions for inquirer
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function init() {
    promptUser();
}

// prompt for user input
const promptUser = previousList => {
    const employeeList = previousList || [];

    inquirer
        .prompt(questions)
        .then(answers => {
            //pushes employee obj to an array
            employeeList.push(getEmployeeObj(answers));

            if (answers.askAgain) {
                // restarts prompt and passes list to keep data
                console.log('');
                promptUser(employeeList);
            }
            else
                buildPage(employeeList);
        })
}

// creates and return new obj depending on employee type
const getEmployeeObj = data => {
    const { employeeType, name, id, email } = data

    switch (employeeType) {
        case 'Intern':
            const { school } = data;
            return new Intern(name, id, email, school);
        case 'Engineer':
            const { github } = data
            return new Engineer(name, id, email, github)
        case 'Manager':
            const { officeNumber } = data
            return new Manager(name, id, email, officeNumber)
    }
}

// builds and makes html webpage
const buildPage = employeeList => {
    const generateCard = require('./src/generate-card.js')
    const generateHtml = require('./src/generate-html.js')

    //maps array with html sections for each employee then joins it together
    const cardListEl = employeeList.map(employee => generateCard(employee)).join('')
    const htmlEl = generateHtml(cardListEl).trim();

    fs.writeFile('./dist/index_test.html', htmlEl, (err) => {
        if (err) throw err;
        console.log('The file has been created in "dist" folder!');
    });
}

init();