#!/usr/bin/node
let x = process.argv[2];
let i = 0;

if (!Number.isInteger(Number(x))) {
  console.log('Missing number of occurrences');
} else {
  x = Number(x);
  while (x > i) {
    console.log('C is fun');
    i++;
  }
}