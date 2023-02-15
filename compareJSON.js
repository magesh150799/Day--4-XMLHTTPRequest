let obj1 = {name: "raju", age: 5};
let obj2 = {age: 5, name: "raju"};

function compareJSONObjects(obj1, obj2) {
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);

if (keys1.length !== keys2.length) {
return "Two JSON do not have same properties";
}

for (let i = 0; i < keys1.length; i++) {
let key = keys1[i];

if (obj1[key] !== obj2[key]) {
  return "Two JSON do not have same properties";
}
}

return "Two JSON have same properties";
}

console.log(compareJSONObjects(obj1, obj2));





