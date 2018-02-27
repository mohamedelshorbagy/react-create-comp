#!/usr/bin/env node

const program = require("commander");
const { createReactComponent , createStatelessReactComponent } = require("./app.js");




program
    .version("1.0.0")
    .description("Create React Components(stateful , stateless)");


program
    .command("generate <ComponentName>")
    .alias("g")
    .option('-s, --stateless' , "Stateless Component")
    .description("Create React Components, options [ -s, --stateless ] -> For Stateless Component")
    .action((cmpName,options) => {
        if(options.stateless) {
            createStatelessReactComponent(cmpName);
        } else {
            createReactComponent(cmpName);
        }
    })

program.parse(process.argv);
