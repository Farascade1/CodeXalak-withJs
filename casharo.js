// // let Age = 24
// // let name = "Osama"

// // document.write(" My name is ", name, " my age is ", Age)

// // let myName = "Suheila"
// // let My Age = 24

// // document.write(" MyName ", " MyAge ")

// let age = 70
// let name = "Osama"
// document.write("There was once a man called ", name, "<br> ")
// document.write("He was  ", age, " years old ", "<br> ")
// document.write("He liked his name   ", name, " but ", "<br> ")
// document.write("He didnot like being   ", age, " years old ", "<br> ")


// let num1 = 3
// let num2 = 2

// document.write(num1 + num2, "<br>")
// document.write(num1 - num2, "<br>")
// document.write(num1 * num2, "<br>")
// document.write(num1 / num2, "<br>")

// let num = 8
// num++
// num--
// document.write(num)

// let ispassed = true

// if (ispassed == false) {
//     document.write("You will have car as a gift")
// }
// else {
//     document.write("Sorry you filed!")
// }

// let corecpassw = "pass122"
// if (corecpassw == "pass122") {
//     document.write("successful login, welcome")
// }
// else {
//     doc ument.write("Password is incorrect")
// }

// let age = 15
// if (age >= 18) {
//     document.write("you can drive")
// }

// else {
//     document.write("you can not drive")
// }

// let subject1 = 100
// subject2 = 199

// if (subject1 == 100 && subject2 == 100) {
//     document.write("You will have car as gift")
// }
// else {
//     document.write("sorry you failed")
// }


// let marks = 8
// if (marks == 100) {
//     document.write("Grade A")
// }
// else if (marks > 100) {
//     document.write("Unkown garde")
// }
// else if (marks >= 90 && marks <= 100) {
//     document.write("Grade A-")
// }
// else if (marks >= 70 && marks <= 80) {
//     document.write("Grade B")
// }
// else if (marks >= 50 && marks <= 60) {
//     document.write("Grade C")
// }
// else if (marks <= 50) {
//     document.write("Failed")
// }

// how to add two numbers

// let num1 = parseInt(prompt("Enter a number one"))
// let num2 = parseInt(prompt("Enter a number two"))
// document.write(num1 + num2)

// dhisida project anfac plus
// let Password = parseInt(prompt("Enter a password"))
// if (Password == 1234) {
//     const options = ["1 Anfac Gudaha ah", " 2 Anfac Dibada ah", "3 iskaxir"]
//     const userchoice = prompt("Mid dooro \n" + options.join("\n"))
//     if (userchoice == 1) {
//         let xirmaha = ["1 xirmo 1 USD", "2 xirmo 2 USD", "3 xirmo 3 USD"]
//         let xirmachoice = prompt("fadlan dooro xirmo\n" + xirmaha.join("\n"))


//         if (xirmachoice == 1) {
//             let xaqiijin = ["1 Haa", "2 Maya"]
//             let text = prompt("Ma hubtaa inaa ku shubatid 1 USD?\n" + xaqiijin.join("\n"))


//             if (text == 1) {
//                 document.write("waxaa heshay xirmada Anfac 1 USD oo ah 200 daqiiqo")
//             }

//             else {
//                 document.write("Jaw")
//             }
//         }
//         if (xirmachoice == 2) {
//             let xaqiijin = ["1 Haa", "2 Maya"]
//             let text = prompt("Ma hubtaa inaa ku shubatid Anfac xirmada 2 USD?\n" + xaqiijin.join("\n"))
//             if (text == 1) {
//                 document.write("waxaa heshay xirmada anfac ee 2 USD oo ah 200 daqiiqo")

//             }
//             else {
//                 document.write("Jaw")
//             }
//         }
//         if (xirmachoice == 3) {
//             let xaqiijin = ["1 Haa", "2 Maya"]
//             let text = prompt("Ma hubtaa inaa ku shubatid Anfac xirmada 3 USD?\n" + xaqiijin.join("\n"))
//             if (text == 1) {
//                 document.write("waxaa heshay xirmada anfac ee 3 USD oo ah 320 daqiiqo ")
//             }
//             else {
//                 document.write("jaw ")
//             }
//         }
//     }
//     if (userchoice == 2) {
//         let xirmaha = ["1 xirmo 5 USD", "2 xirmo 10 USD", "3 xirmo 15 USD"]
//         let xirmachoice = prompt("fadlan dooro xirmo\n-" + xirmaha.join("\n"))

//         if (xirmachoice == 1) {
//             let xaqiijin = ["1 Haa", "2 Maya"]
//             let text = prompt("Ma hubtaa inaa ku shubatid xirmada anfac 5 USD?\n" + xaqiijin.join("\n"))
//             if (text == 1) {
//                 document.write("waxaa heshay xirmada anfac 5 USD oo ah 90 daqiiqo wadamada dibada")
//             }
//             else {
//                 document.write(" JAw")
//             }

//         }
//     }
//     if (userchoice == 3) {
//         document.write("Macslaamo")
//     }
//     if (userchoice == 4) {
//         document.write("waxan lama yaqaano ")
//     }
// }
// else {
//     document.write("Incorrect password")
// }




// simple project displays the bigggest nuber

// let num1 = parseInt(prompt("Enter the first number"))
// let num2 = parseInt(prompt("Enter the second number"))
// let num3 = parseInt(prompt("Enter the third number"))
// let biggestNumber;
// if (num1 >= num2 && num1 >= num3) {
//     biggestNumber = num1;
// }

// else if (num2 >= num1 && num2 >= num3) {
//     biggestNumber = num2
// }
// else {
//     biggestNumber = num3
// }
// document.write("the biggest number is :", + biggestNumber)

//   LOOPS

// let num = 1

// while (num <= 9) {
//     document.write(num, "<br>")
//     num++
// }

// while loop
// let name = prompt("Enter your name")
// let num = 1
// while (num <= 100) {
//     document.write(name, "<br>")
//     num++
// }

// Do while loop

// let num = 1
// do {
//     document.write(num, "<br>")
//     num++
// }

// while (num <= 5)

// for loop
// intialized; condition; increment

// for (let num = 1; num <= 5; num++) {
//     document.write(num, "<br>")
// }

// let num = 5
// while (num <= 20) {
//     document.write(num, "<br>")
//     num += 5
// }

// function myName() {
//     console.log("My Name is Geedi")
//     document.write("My name is Geedi")
// }

// myName()


// function addNum() {
//     let addNum = parseInt(prompt("Enter number one"));
//     let adnum = parseInt(prompt("Enter number two"));

//     document.write(addNum + adnum)
// }

// addNum();


// let name = prompt("Enter your name")
// let num = 1
// while (num <= 10) {
//     document.write(name, "<br>")
//     num++
// }

// function num() {
//     let num1 = parseInt(prompt("Enter a number one"))
//     let num2 = parseInt(prompt("Enter a number two"))
//     if (num1 > num2) {
//         document.write(num1)
//     }
//     else {
//         document.write(num2)
//     }
// }
// num()


// function man(name, age, address) {
//     document.write(name, age, address, "<br>")
// }

// man("Ali ", 30, " Hodan")
// man("Geedi ", 100, " Midiino")
// man("Muuse ", 50, " Kaxda")
// man("Muna ", 40, " WBeri")


// function with return


// function sum(num1, num2) {
//     return num1 + num2
// }
// document.write(sum(10, 20))

// this project displays multiplication
// function multi() {
//     let num1 = parseInt(prompt("Enter a number one"))
//     let num2 = parseInt(prompt("Enter a number teo"))
//     return num1 * num2
// }
// document.write(multi())

// let SayHi = () => {
//     document.write("Hello world")
// }

// SayHi()


// let numbers = [1, 2, 3, 4]
// document.write(numbers[0])
// let friends = ["Ali", "Osama", " Geedi"]
// document.write(friends[2])

// let friends = ["Hassan", "Abdi", "John", "Jim", "Faras", "Vena"]
// let num = 0
// while (num < friends.length) {
//     document.write(friends[num], "<br>")
//     num++
// }

// let friends = ["Abdi", "Ali", "Muuse", "Nasro", "Ceel", "Buur", "Nasiib"]

// // let newFreinds = friends.join(" * <br> ")
// // pop deletes last element

// // friends.pop()
// // push add element
// // friends.push("Hanad")

// // shift deletes first element
// // friends.shift()

// // friends.unshift("Geesi", "Biihi")
// // sort will display as alphabate Englih
// friends.sort()
// document.write(friends)


// let friends = ["Abdi", "Ali", "Muuse", "Nasro", "Ceel", "Buur", "Nasiib"]

// un arrenge
// friends.slice(0, 2)

// filter

// let listNames = ["Geedi", "Musse", "Abdi", "Ali"]

// let names = listNames.filter(function (newName)
//     return newName == "Ali"
// })
// document.write(names)

// map is like loop easy 32


// DOM javascript

// let btElement = document.getElementById("btn")

// let title = document.getElementsByTagName("p")[0]

// let btn = document.getElementsByClassName("btn")[0]

// let getForm = document.querySelector("form")


// console.log(btElement)
// console.log(title)
// console.log(btn)

// console.log(getForm)

// let title = document.querySelector("#title")

// const description = document.querySelector(".desc")


// title.innerHTML = "This is DOM js...."
// // changing css

// title.style.backgroundColor = "blue"
// title.style.color = "red"
// title.style.padding = "20px"
// title.style.marging = "40px"
// description.innerHTML = "This is some description from js"

// classwork

// let btn = document.querySelector(".btn")

// btn.innerHTML = "This is my class work!"
// btn.style.backgroundColor = "gray"
// btn.style.padding = "20px 50px"
// btn.style.border = "none"
// btn.style.borderRadius = "10px"
// btn.style.color = "white"
// btn.style.textAling = "center"

// addEventLisner

// const button = document.querySelector(".btn")

// button.addEventListener("click", function () {
//     document.body.style.backgroundColor = "red"
// })


// const light = document.querySelector("#light")
// const onButton = document.querySelector("#onBtn")
// const offButton = document.querySelector("#offBtn")

// onButton.addEventListener("click", function () {
//     light.style.backgroundColor = "green"
// })
// offButton.addEventListener("click", function () {
//     light.style.backgroundColor = "white"
// })
