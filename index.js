

// ============================== CODE START ==============================

const fs = require("fs");

// TODO: Implement file reading for faster readme generation
if(process.argv[2]){
    // Pass in a json file path with info to populate the readme if desired
    // Pass in an image file to link as a screencap

}

const inquirer = require("inquirer");

const questions = JSON.parse(fs.readFileSync("questions.json", "utf-8"));

inquirer.prompt(questions)
    .then(responses=>{
        // TODO: Implement response handling

        // If any of the following aren't required and are left blank,
        // ommit them from the result. Required will have *

        // x Name*
        // x Deployed Site Link
        //   Screencap
        // x Github Repo
        // x Description*
        // x Installation Instructions
        // x Usage*
        // ~ License
        // x Contributing Guidelines
        // x Tests
        // x Credits
        // x Questions

        console.log("Done!");

        const {fullName,
                description,
                deployedURL,
                installation,
                usage,
                user,
                repo,
                contributing,
                tests,
                credits,
                questions} = responses;

        const template = `# ${fullName}

${description}

[Deployed Site: ${deployedURL}](${deployedURL})

![Screencap](screencap.png)

## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing Guidelines](#contributing-guidelines)
5. [Tests](#tests)
6. [Status](#status)
7. [Credits](#credits)
8. [Questions](#questions)

## Installation Instructions

${installation}

## Usage

\`\`\`
${usage}
\`\`\`

### License

![GitHub](https://img.shields.io/github/license/${user}/${repo}?style=for-the-badge)

## Contributing Guidelines

${contributing}

### Tests

\`\`\`
${tests}
\`\`\`

## Status

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/${user}/${repo}?include_prereleases&style=for-the-badge)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/${user}/${repo}?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/${user}/${repo}?style=for-the-badge)
![GitHub commits since latest release (by date including pre-releases)](https://img.shields.io/github/commits-since/${user}/${repo}/latest?include_prereleases&style=for-the-badge)

## Credits

${credits}

## Questions

${questions}

`
        fs.writeFileSync("genREADME.md", template, "utf-8");
    })

    // TODO: Generate Table of Contents
    function genToc(headingArray){

    }