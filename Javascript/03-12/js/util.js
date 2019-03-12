//take in an objecjt and return the properties
//strings in an array in alphabetical order
function getProperties(object) {
//   const keys = Object.keys(object);
// keys.forEach( ()=>{

// })



  let array = [];
  for (const key in object) {
    array.push(key);
  }
  array.sort();
  return array;
}

module.exports = getProperties;
