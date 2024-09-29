const accountId = 1234321
let accountEmail = "rh@gmail.com" // variable declaration
// var acountPassword = "123456" now a days we do not use var for variable declaration because it has scope problem
// accountCity = "ahmedabad" / do not declare variable with let even it is possible to declare without using let
let accountState; //if we do not declare completely without declaration it will be undefined
// accountId = 3

// console.log(accountId) not allowed 
/*
prefer not to use var because of issue in block scope and functional scope

*/

accountEmail = "rv.rahulvan@gmail.com"
accountPassword = "456775"
accountCity = "rajkot"

console.table([accountId , accountEmail , accountPassword, accountCity, accountState])
