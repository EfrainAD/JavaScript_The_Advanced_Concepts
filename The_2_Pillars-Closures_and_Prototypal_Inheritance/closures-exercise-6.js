const array = [1, 2, 3, 4];

// My solution // doesn't matter if i in scope or not.
// for (var i = 0; i < array.length; i++) {
//   const j = array[i]
  
//   setTimeout(function () {
//     console.log('I am at index ' + j);
//   }, 3000);
// }

// first solution given and better. // let keyword makes the varible a block scope
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log('I am at index ' + array[i]);
//   }, 3000);
// }
// second soliton // passing it as a function make i into a new var when passed. Kind of like mine but without the function.
for (var i = 0; i < array.length; i++) {
  const run = (i) =>  
    setTimeout(function () {
      console.log('I am at index ' + array[i]);
    }, 3000);
    
  run(i)
}
