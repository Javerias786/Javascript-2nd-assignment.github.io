//..........................................................................................
//Q1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function print(num) {
    return function(def) {
      return num + def;
    };
  }

  // creating closure with 5
 num = print(5);

  console.log(num(10)); // output: 15
  console.log(num(20)); // output: 25

//...............................................................................................


  // 2. Write a recursive function that searches an array for a specific value. The
  // function should return true if the value is found, and false if it is not. You
  // can assume that the array is not nested

let array=[1,2,3,4,5]  
function filteredarray(array, value) {
    if (array.length === 0) {
      return false; //   value is not found
    } else if (array[0] === value) {
      return true; // value is found 
    } else {
      return filteredarray(array.slice(1), value); //  search the rest of the array
    }
  }
  console.log(filteredarray(array, 3)); // Output: true
  console.log(filteredarray(array, 6)); // Output: false


//..............................................................................................

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

let para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
document.getElementById("myDIV").appendChild(para);
console.log(para)

//................................................................................................

//4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function NewListItem(text) {
    //  unordered list name
    let list = document.getElementById("my-list");
    // new list item
    let newItem = document.createElement("li");
    // text of new list 
    let Text = document.createTextNode(text);
    newItem.appendChild(Text);
    list.appendChild(newItem);
}
// text "New Item"
NewListItem("New Item");
console.log(document.getElementById("my-list"));
//.....................................................................................................

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

 let bgcolor=document.querySelector("p");
 bgcolor.innerHTML="Hello World";
 bgcolor.style.backgroundColor="#1554";
 console.log(bgcolor)

//..............................................................................................

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  let myObject = { name: 'Javeria', age: 20 };
  saveObjectToLocalStorage('myKey', myObject);
  let savedObject = JSON.parse(localStorage.getItem('myKey'));
  console.log(savedObject); // Output: { name: 'javera', age: 20 }
  let stringify = JSON.stringify(myObject);
  localStorage.setItem("myObject" , stringify)
  //........................................................................................................

  // 7. Write a function that retrieves an object from localStorage. The function
  // should take one argument, which is a string representing the key used to
  // store the object. The function should return the object.

store a Object in localStorage
localStorage.setItem("myObject", "Hello, world!");

//get back
let retrievedString = localStorage.getItem("myObject");

console.log(retrievedString); // output= "Hello, world!"

//.........................................................................................................

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object


let myObj = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
};
saveToLocalStorage(myObj);

let newObj = JSON.parse(localStorage.getItem('myObj'));

console.log(newObj);

function saveToLocalStorage(obj, key) {
 
  localStorage.setItem(key, JSON.stringify(obj));

  let newObj = JSON.parse(localStorage.getItem(key));
// new object
  return newObj;
}
