const Employee = require("./Employee");

const questions = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What type of employee are you adding?',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ],
    },
    {
        type: 'input',
        name: 'name',
        message: "Employee's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Employee's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Employee's Email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Intern's school name:",
        when: answer => {
            return answer.employeeType == 'Intern';
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Engineer's github username:",
        when: answer => {
            return answer.employeeType == 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager's office number:",
        when: answer => {
            return answer.employeeType == 'Manager';
        }
    },
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Add another employee?',
        default: false,

    },
]

module.exports = questions;