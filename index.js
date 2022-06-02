const generateHtml = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const theTeam = []; 

// start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What is the name of the Manager?");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email address",
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter the manager's office number",
        },
    ])
    .then(managerInput => {
        const  { name, id, email, officeNum } = managerInput; 
        const manager = new Manager (name, id, email, officeNum);

        theTeam.push(manager); 
        console.log(manager); 
    });
};

const addTeamMember = () => {
    console.log(`
         =================
    Adding employees to the team
         =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            message: "Select an option to add to your Team Roster.",
            name: 'role',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: "What's the name of the employee?", 
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What's the name of the employee?");
                    return false; 
                };
            },
        },
        {
            type: 'input',
            message: "Please enter the employee's ID Number.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter the employee's email.",
            name: 'email',
        },
// this portion allows for only when the user selects the Engineer.
        {
            type: 'input',
            message: "Please enter the Engineer's GitHub username.",
            name: 'gitHub',
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Engineer's GitHub username:");
                };
            },
        },
// this portion allows for only when the user selects the Intern.
        {
            type: 'input',
            message: "What College/University is the Intern currently attending?",
            name: 'school',
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("What College/University is the Intern currently attending?");
                };
            },
        },
        {
            type: 'confirm',
            message: 'Would you like to add more team members?',
            name: 'additonalMembers',
            default: false
        }
    ])
    .then(data => {
        // data for employee
        let { name, id, email, role, gitHub, school, additonalMembers } = data; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, gitHub);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        };

        theTeam.push(employee); 

        if (additonalMembers) {
            return addTeamMember(theTeam); 
        } else {
            return theTeam;
        };
    });

};


// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error, it will console log "an error was produced" to notify where the error occurred.
        if (err) {
            console.log(err, "An error was produced.");
            return;
        // If no error is produced and all is successful, it will console.log letting the user know that the index.html file was created and located in the dist folder.
        } else {
            console.log("The index.html file has successfully been created. Check it out in the /dist folder!");
        };
    });
}; 

addManager()
  .then(addTeamMember)
  .then(theTeam => {
    return generateHtml(theTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });