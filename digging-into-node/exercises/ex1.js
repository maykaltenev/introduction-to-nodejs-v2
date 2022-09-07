#!/usr/bin/env node
"use strict";

var util = require("util");
var path = require("path");
var fs = require("fs");
var getStdin = require("get-stdin")
var args = require('minimist')(process.argv.slice(2), {
    boolean: ["help", "in"],
    string: ["file"]
})
// console.log(args)
if (args.help) {
    printHelp();
} else if (
    args.in ||
    args._.includes("-")) {
    getStdin().then(processFile).catch(error)

} else if (args.file) {
    fs.readFile(path.resolve(args.file), function onContents(err, contents) {
        if (err) {
            error(err.toString())
        } else {
            processFile(contents.toString())

        }
    });
    processFile(path.resolve(args.file));

} else {
    error('Incorrect usage', true);
}

// **********************


function processFile(contents) {
    contents = contents.toUpperCase();
    process.stdout.write(contents);
    // console.log(contents)
}
function error(msg, incomingData = false) {
    console.log(msg);
    if (incomingData) {
        console.log("");
        printHelp();
    }
}
function printHelp() {
    console.log("ex1 usage:");
    console.log(" ex1.js --file={FILENAME}");
    console.log("");
    console.log("--help                   process this help");
    console.log("--file={FILENAME}                   process the file");
    console.log("--in, -                             process stdin");
    console.log("");
}
