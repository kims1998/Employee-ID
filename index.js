const inquirer = require('inquirer');
const generateHtml = require('./lib/generateHtml');

const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const theEmployees = [];


function theTeam() {
    inquirer.prompt([
        {
        type: 'list',
        message: "Would you like to add a new employee?",
        name: 'createEmployee',
        choices: ['Intern', 'Engineer', 'That is all'],
        },
    ])
    .then((res) => {
        console.log(res);
        if(res.createEmployee == 'Intern') {

            theIntern();
        };

        if(res.createEmployee == 'Engineer') {

            theEngineer();
        };

        if(res.createEmployee == 'That is all') {
            console.log(theEmployees);

            createHtml();
        };
    })
};

function theIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'iName',
        },
        {
            type: 'input',
            message: "What is the intern's ID?",
            name: 'iId',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'iEmail',
        },
        {
            type: 'input',
            message: 'What school does the intern attend currently? ',
            name: 'school',
        },
    ])
    .then((res) => {
        console.log(res)
        const intern = new Intern (res.iName, res.iId, res.iEmail, res.school);
        theEmployees.push(intern);

        theTeam();
    });
};

function theEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'eName',
        },
        {
            type: 'input',
            message: "What is the Engineer's ID? ",
            name: 'eId',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'eEmail',
        },
        {
            type: 'input',
            message: 'What is their GitHub username?',
            name: 'github',
        },
    ])
    .then((res) => {
        console.log(res)
        const engineer = new Engineer (res.eName, res.eId, res.eEmail, res.github);
        theEmployees.push(engineer);

        theTeam();
    });

};

function theManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Manager's name?",
            name: 'mName',
        },
        {
            type: 'input',
            message: "What is the Manager's ID?",
            name: 'mId',
        },
        {
            type: 'input',
            message: 'What is their email?',
            name: 'mEmail',
        },
        {
            type: 'input',
            message: 'What is their Office Number?',
            name: 'officeNum',
        },
    ])
    .then((res) => {
        console.log(res)
        const manager = new Manager (res.mName, res.mId, res.mEmail, res.officeNum);
        theEmployees.push(manager);
        
        theTeam();
    });

};

function createHtml() {
    generateHtml(theEmployees)
};

theManager();