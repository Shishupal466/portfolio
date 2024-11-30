// Select all variable 

const hello = document.getElementsByClassName('hello')
const about= document.getElementsByClassName('about')
const skill = document.getElementsByClassName('skill')
const education = document.getElementsByClassName('education')
const project = document.getElementsByClassName('project')
const hobby = document.getElementsByClassName('hobby')
const contact= document.getElementsByClassName('contact')
const home = document.getElementsByClassName('home')
const profile = document.getElementsByClassName('profile')

const about1 = document.querySelector(".hello")


// clickable

about1.onclick= function(){
    console.log('about button was clicked')
}
skill.onclick="console.log('skill button was clicked')"

console.log("hello");