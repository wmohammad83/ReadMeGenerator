const fs = require("fs");
const inquirer = require("inquirer");

const badges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
};

inquirer
  .prompt([
    // {
    //   type: "input",
    //   message: "What is your full name?",
    //   name: "fullname",
    // },
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
    // {
    //   type: "list",
    //   message: "License used",
    //   name: "projectLicense",
    //   choices: Object.keys(badges),
    // },
    // {
    //   type: "input",
    //   message: "How do you install the project?",
    //   name: "projectInstall",
    // },
    // {
    //   type: "input",
    //   message: "How do you use the project",
    //   name: "projectUsage",
    // },
    // {
    //   type: "input",
    //   message: "What license does the project use",
    //   name: "projectLicense",
    // },
  ])

  .then((response) => {
    // console.log(`Success! User: ${response.fullname}`);

    const generateREADME = `
# ${response.projectTitle}

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
    
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
    
    
// npm install
    
    
## Usage
    
You can use this applicaiton by running .
    
## License
    
This project is licensed under the MIT license.
        
## Contributing Here Is A Header
    
Fork and pull request.
    
## Tests
    
To run tests, run the following command:
    
 
// npm test

    
## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${response.email}. You can find more of my work at [dmueller2u](https://github.com/dmueller2u/).



`;

    fs.writeFile("README.md", generateREADME, (err) => {
      err ? console.log(err) : console.log("success");
    });
  });
