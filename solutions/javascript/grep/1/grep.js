#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const args = process.argv.slice(2);
const flagsSet = new Set(args.filter(arg => arg.startsWith('-')));
const pattern = args.find(arg => !arg.startsWith('-'));
const files = args.slice(args.indexOf(pattern) + 1);

if (!pattern || files.length === 0) {
  console.error("Uso: node grep.js [-flags] pattern file1 file2 ...");
  process.exit(1);
}

const flags = {
  x: flagsSet.has('-x'),
  i: flagsSet.has('-i'),  
  n: flagsSet.has('-n'),  
  l: flagsSet.has('-l'),  
  v: flagsSet.has('-v')   
};

const regex = new RegExp(flags.x ? `^${pattern}$` : pattern, flags.i ? 'i' : '');
const severalFiles = files.length > 1;

files.forEach(file => {
  let lines = readLines(file);
  const matches = lines.reduce((acc, line, index) => {
    const match = regex.test(line);
    if (flags.v ? !match : match) {
      let matchedLine = flags.n ? `${index + 1}:${line}` : line;
      acc.push(severalFiles ? `${file}:${matchedLine}` : matchedLine);
    }
    return acc;
  }, []);

  if (matches.length > 0) {
    console.log(flags.l ? file : matches.join('\n'));
  }
});
