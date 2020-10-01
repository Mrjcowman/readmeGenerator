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

        // Name*
        // Deployed Site Link
        // Screencap
        // Github Repo
        // Description*
        // Installation Instructions
        // Usage*
        // License
        // Contributing Guidelines
        // Tests
        // Credits
        // Questions
    })

    // TODO: Generate Table of Contents
    function genToc(headingArray){

    }