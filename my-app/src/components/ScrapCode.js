//map and filter methods and usage of =>
//

const numbers = [1,-2, 2, 3 ,-3, 4, 0];

//filtered will produce a new array using the function given
const filtered = numbers.filter(function(value) {
    return value >=0;
}
); 

console.log(filtered);

// how to use Arrows isntead
// get rid of function keyword so function(value) becomes
// value => {}
// get rid of return key word so you do
// value >= 0; which stands for return value >=0;
// get rid of curly braces {} 

const filtered = numbers.filter(value => value >=0 );
}
); 

// can replace the word value its just a parameter with any letter n

const filtered = numbers.filter(n => n >=0 );
}
); 

// that basically stands for function n { return n >=0;}
// Notice after the n is not an ARROW its a larger or equal >=

