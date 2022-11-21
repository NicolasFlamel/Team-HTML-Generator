const fs = require('fs');
const inquirer = require('inquirer');
const loadQuestions = require('./src/questions'); // questions for inquirer
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

function init() {
    managerPrompt();
}

//first prompt for manager information
const managerPrompt = () => {
    const employeeList = []
    const isManager = true;

    console.log("Please enter your Manager's information");
    inquirer
        .prompt(loadQuestions(isManager))
        .then(answers => {
            employeeList.push(getEmployeeObj(answers));
            employeePrompt(employeeList);
        })
}

// prompt for user input
const employeePrompt = previousList => {
    const employeeList = previousList || [];
    const isManager = false;

    console.log('');

    inquirer
        .prompt(loadQuestions(isManager))
        .then(answers => {
            //pushes employee obj to an array
            employeeList.push(getEmployeeObj(answers));

            // restarts prompt and passes list to keep data
            if (answers.askAgain)
                employeePrompt(employeeList);
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

    fs.writeFile('./dist/index.html', htmlEl, (err) => {
        if (err) throw err;
        console.log('The file has been created in "dist" folder!');
    });
}

init();