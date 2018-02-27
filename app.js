const touch = require("touch");
const fs = require("fs");
const path = require("path");
const os = require("os");




function createReactComponent(argvName) {
    // Get OS Type
    let OsType = os.platform();

    // Get Component Name
    let fileName = argvName + ".js";
    let documentData = `import React, { Component } from 'react';
import ReactDOM from 'react-dom';
    
export default class ${argvName} extends Component {
    render() {
        return (
            <div className="app">
                <p>Component ${argvName} is Working !</p>
            </div>
        )
    }
}
`;



let fullDir;
if(OsType.indexOf("win") != -1) { // Windows Case
    fullDir = process.cwd() + "\\" + fileName; 
} else { // Any OS Case
    fullDir = process.cwd() + "/" + fileName; 
}


let isExisted = fs.existsSync(fullDir); 
if(isExisted) {
    console.log("Component is already created!");
} else {
    touch(fullDir,function(resp) {
        fs.writeFile(fullDir,documentData, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log(`${argvName} Component Was Created!`);            
        }); 
    })
}




}


function createStatelessReactComponent(argvName) {
    // Get OS Type
    let OsType = os.platform();

    // Get Component Name
    let fileName = argvName + ".js";
    let documentData = `import React, { Component } from 'react';
    
const ${argvName} = ( props ) => {
    return (
        <div className="app">
            <p>Component ${argvName} is Working ! (stateless component)</p>
        </div>
    )
}
export default ${argvName};
`;


let fullDir;
if(OsType.indexOf("win") != -1) { // Windows Case
    fullDir = process.cwd() + "\\" + fileName; 
} else { // Any OS Case
    fullDir = process.cwd() + "/" + fileName; 
}


let isExisted = fs.existsSync(fullDir); 
if(isExisted) {
    console.log("Component is already created!");
} else {
    touch(fullDir,function(resp) {
        fs.writeFile(fullDir,documentData, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log(`${argvName} Component Was Created!`);
        }); 
    })
}
    
}

module.exports = {createReactComponent, createStatelessReactComponent};
