const loadQuestions = isManager => {
    const questions = [
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee are you adding?',
            choices: [
                'Engineer',
                'Intern'
            ],
            when: answer => {
                if (isManager)
                    answer.employeeType = 'Manager'
                return !isManager;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "Employee's name:",
            validate(input) {
                const reg = new RegExp(`[a-z]{${input.length}}`, 'gi')

                if (reg.test(input) && input.length < 10 && input) {
                    return true;
                }
                throw Error('Please enter a name');
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "Employee's ID:",
            validate(input) {
                const reg = new RegExp(`[a-z0-9]{${input.length}}`, 'gi')

                if (reg.test(input) && input) {
                    return true;
                }
                throw Error('Please enter an ID');
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee's Email:",
            validate(input) {
                const reg = new RegExp(`[a-z0-9@.]{${input.length}}`, 'gi')

                if (reg.test(input) && input.length < 20 && input.includes('@')) {
                    return true;
                }
                throw Error('Please enter an Email');
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Manager's office number:",
            when: answer => {
                return answer.employeeType == 'Manager';
            },
            validate(input) {
                const reg = new RegExp(`[0-9]{${input.length}}`, 'gi')

                if (reg.test(input) && input.length < 100 && input) {
                    return true;
                }
                throw Error('Please enter an office number');
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer's github username:",
            when: answer => {
                return answer.employeeType == 'Engineer';
            },
            validate(input) {
                const reg = new RegExp(`^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$`, 'i')

                if (reg.test(input) && input.length < 38 && input) {
                    return true;
                }
                throw Error('Please enter a user name');
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school name:",
            when: answer => {
                return answer.employeeType == 'Intern';
            },
            validate(input) {
                const reg = new RegExp(`[a-z\\s]{${input.length}}`, 'gi')

                if (reg.test(input) && input.length < 30 && input) {
                    return true;
                }
                throw Error('Please enter a school name');
            }
        },
        {
            type: 'confirm',
            name: 'askAgain',
            message: 'Add another employee?',
            default: false,
            when: answer => {
                return !isManager;
            }
        },
    ]

    return questions;
}


module.exports = loadQuestions;