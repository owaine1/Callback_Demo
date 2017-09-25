console.log('logged');
//Basic 2 functions chaining together
/*
var fruit = [];

function add_fruit(){
  console.log('Inside add_fruit');
  console.log(fruit);

}
function fruit_check(fruit_name, callback){
  console.log('Inside fruit_check');
  if(fruit_name != "banana") {
    fruit.push(fruit_name);
    callback(fruit);
  }
}

fruit_check('orange', add_fruit);
*/
//another ex
/*
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(do_friend_stuff);

function do_friend_stuff(eachName, index){
  console.log(index + 1 + ". " + eachName);

}
*/
/*
var friends = ["Mike", "Stacy", "Andy", "Rick"];

var friend = 'bob';

var truefriend = false;

var friend_obj = {name: 'bill'};

var friend_Age = 42;

var make_friend = function(){
  // making friend!
}

function do_something(incoming){
  console.log(incoming);
}
do_something(make_friend); // e.g. truefriend, friend_obj then make_friend
*/
// global variable​
/*
var allUserData = [];

// generic logStuff function that prints to console​
function logStuff(userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
}

// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
  console.log(options);
  console.log(callback);
  allUserData.push(options);
  callback(options);
}
getInput({name:"Alex", speciality:"JavaScript"}, logStuff);
*/

var clientData = {
  id: 094545,
  fullName: "Not Set",
  // setUserName is a method on the clientData object​
  setUserName: function (firstName, lastName)  {
    // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput(firstName, lastName, callback, callbackObj)  {
  // The use of the Apply function below will set the this object to be callbackObj​
  callback.apply(callbackObj, [firstName, lastName]);
}
getUserInput("Barack", "Obama", clientData.setUserName, clientData);

console.log(clientData.fullName);
//=> Barack Obama
