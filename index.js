

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

        let {fullName,
                description,
                deployedURL,
                installation,
                usage,
                license,
                user,
                repo,
                contributing,
                tests,
                credits,
                questions} = responses;
        
        let deployedSiteSection = "";
        let licenseBadge = "";

        if(deployedURL) deployedSiteSection = `[Deployed Site: ${deployedURL}](${deployedURL})`

        // Append a given chapter to the TOC
        let toc = "", tocLines=0;
        const appendToc = (str)=>{
            toc+=(tocLines+1)+". "+str+"\n";
            tocLines++;
        }

        if(installation) {
            appendToc("[Installation Instructions](#installation-instructions)");
            installation = `## Installation Instructions
\`\`\`
${installation}
\`\`\``;
        }
        if(usage) {
            appendToc("[Usage](#usage)");
            usage = `## Usage
\`\`\`
${usage}
\`\`\``;
        }
        if(license) {
            appendToc("[License](#license)")
            licenseBadge = `![GitHub](https://img.shields.io/github/license/${user}/${repo}?style=for-the-badge)`
            license = `## License
This application uses the ${license} license. For more info, see the LICENSE document`
        }
        if(contributing) {
            appendToc("[Contributing Guidelines](#contributing-guidelines)");
            contributing = `## Contributing Guidelines
${contributing}`;
        }
        if(tests) {
            appendToc("[Tests](#tests)");
            tests = `## Tests
\`\`\`
${tests}
\`\`\``;
        }
        appendToc("[Status](#status)");
        if(credits){
            appendToc("[Credits](#credits)");
            credits = `## Credits
${credits}`;
        }
        appendToc("[Questions](#questions)")
        if(questions){
            questions = `## Questions
If you have any questions, you can ask ${user} at ${questions} or through GitHub at [their profile](https://github.com/${user})`
        }else{
            questions = `## Questions
If you have any questions, you can ask ${user} through GitHub at [their profile](https://github.com/${user})`
        }

        const template = `# ${fullName}

${licenseBadge}

${description}

${deployedSiteSection}

![Screencap](screencap.png)

## Table of Contents
${toc}

${installation}

${usage}

${license}

${contributing}

${tests}


## Status

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/${user}/${repo}?include_prereleases&style=for-the-badge)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/${user}/${repo}?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/${user}/${repo}?style=for-the-badge)
![GitHub commits since latest release (by date including pre-releases)](https://img.shields.io/github/commits-since/${user}/${repo}/latest?include_prereleases&style=for-the-badge)

${credits}

${questions}

`
        fs.writeFileSync("genREADME.md", template, "utf-8");
    })

    // TODO: Generate Table of Contents
    function genToc(headingArray){

    }