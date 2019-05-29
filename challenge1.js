let newObject = {
    item1: 'prop1', 
    item2: 'prop2', 
    item3: 'prop3'
}; 

newObject.newProp = 'prop4'; 
console.log(newObject); 

// add a new property newProp to my object using function. 
const addPropToObject = (newProp, newValue) => {
    newObject.newProp = newValue; 
}
addPropToObject('item4'); 

