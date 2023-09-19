function doSomething() {
  document.body.style.backgroundColor = '#ff0'
}

const button = document.querySelector('#btn')
// button.addEventListener('click', doSomething)
// button.addEventListener('dblclick', doSomething)
// button.addEventListener('mouseover', doSomething)
// button.addEventListener('mouseout', doSomething)
// button.addEventListener('mouseup', doSomething)

document.querySelector('#another-btn').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
})