const assertEqual = require("../assertEqual"); 
const head = require("../head");

assertEqual(head([0,2,4]), 0);
assertEqual(head([]), undefined);
assertEqual(head(["hi", 3, {}]), "hi");
