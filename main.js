

console.log('hello world')
// function or methods

function myFirstFunction() {
  console.log('this text is form inside function')
}

// this function updates the styling of my main heading
function changeMyHeading() {
  const h1 = document.querySelector('h1')
  h1.style.color = '#f11'
  h1.style.backgroundColor = '#ddd'
  myFirstFunction()
}

changeMyHeading()

function addNewElement() {
  const element = document.createElement('p');
  // element.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur!'
  element.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consequatur!'
  document.body.appendChild(element)
}

addNewElement()

function addInputToForm() {
  const form = document.querySelector('form');
  const input = document.createElement('input')
  input.setAttribute('type','color')
  form.appendChild(input)
}

addInputToForm()
