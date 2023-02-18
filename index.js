const fs = require("fs");
const inquirer = require("inquirer");

const badges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
};

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "projectGithub",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "give a description of your project",
      name: "projectDescription",
    },
    {
      type: "input",
      message: "What command is needed to install the necessary dependencies?",
      name: "projectInstallation",
    },
    {
      type: "input",
      message: "What command is needed to use the application?",
      name: "projectUsage",
    },
    {
      type: "list",
      message: "License used",
      name: "projectLicense",
      choices: Object.keys(badges),
    },
    {
      type: "input",
      message: "How do you test your project?",
      name: "projectTest",
    },
    {
      type: "input",
      message: "How do contribute in the project",
      name: "projectContributing",
    },
  ])

  .then((response) => {
    // console.log(`Success! User: ${response.fullname}`);

    const generateREADME = `
# ${response.projectTitle}

![GitHub license](https://img.shields.io/badge/license-${response.projectLicense}-blue.svg)
    
## Description
    
${response.projectDescription}
    
## Table of Contents 
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing-here-is-a-header)
    
* [Tests](#tests)
    
* [Questions](#questions)
    
## Installation
    
To install necessary dependencies, run the following command: 

    ${response.projectInstallation}
        
    
## Usage
    
You can use this applicaiton by running \`${response.projectUsage}\`
    
## License
    
This project is licensed under the ${response.projectLicense} license.
        
## Contributing Here Is A Header
    
${response.projectContributing}
    
## Tests
    
To run tests, run the following command:
    
 
    ${response.projectTest}

    
## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [${response.projectGithub}](https://github.com/${response.projectGithub}/).

This README.md has been created using the readme generator available from [here](https://github.com/wmohammad83/ReadMeGenerator).
`;

    fs.writeFile("README.md", generateREADME, (err) => {
      err ? console.log(err) : console.log("success");
    });
  });
