var myfaker = require('faker');//refers to faker package
var mysql = require('mysql');


// console.log(myfaker.address.city());

function generateAddress() {
    console.log(myfaker.address.streetAddress());
    console.log(myfaker.address.city());
    console.log(myfaker.address.state());
}

generateAddress();
