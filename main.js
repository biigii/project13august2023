// document.querySelector('h1')
// document.querySelector('#heading')
// document.querySelector('.header')
// document.querySelector('h1.header')

// document.querySelector("[type='text']")

const h1 = document.querySelector('h1')
h1.style.color = 'red'
h1.style.fontSize = '4em'
h1.style.textAlign = 'center'

const myForm = document.querySelector('form')
myForm.setAttribute('id','form')
myForm.setAttribute('class','my-random-class')

// const body = document.body
const body = document.querySelector('body')
// body.classList = 'this-class-gets-added-via-js'
// body.classList.add('this-class-gets-added-via-js')

// h1.classList.remove('heading')

const h2 = document.createElement('h2')
h2.innerHTML = 'you just created this in javascript';
h2.classList.add('subheading')
h2.style.textDecoration = 'underline'
document.body.appendChild(h2)

const formButton = document.querySelector('[type="submit"]')
formButton.style.setProperty('background-color','red')
// formButton.style.backgroundColor = 'red'