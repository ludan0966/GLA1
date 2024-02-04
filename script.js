const h1 = document.createElement('h1')
h1.innerHTML = 'Dan Lu'
h1.style.textAlign = 'center'
h1.style.color = '#A9A9A9'
document.body.appendChild(h1)

const input1 = document.createElement('input')
document.body.appendChild(input1)
input1.style.display = 'block'
input1.style.margin = '0 auto'

const input2 = document.createElement('input')
document.body.appendChild(input2)
input2.style.display = 'block'
input2.style.margin = '0 auto'

const p = document.createElement('p')
document.body.appendChild(p)
p.style.width = '170px'
p.style.margin = '0 auto'

const br = document.createElement('br')
document.body.appendChild(br)

const btn = document.createElement('button')
btn.style.width = '30px'
btn.style.height = '30px'
btn.style.backgroundColor = 'pink'
btn.style.border = '1px solid white'
btn.innerHTML = 'Click'
btn.style.fontSize = '10px'
btn.style.display = 'block'
btn.style.margin = '0 auto'
document.body.appendChild(btn)

btn.addEventListener('click', () => {
  try {
    if (isNaN(input1.value) || isNaN(input2.value) || input1.value === '' || input2.value === '') {
      throw new Error('Input value should be numbers')
    }
    let num1 = +input1.value
    let num2 = +input2.value
    input1.style.border = '1px solid gray'
    input2.style.border = '1px solid gray'
    p.innerHTML = `The sum is: ${(num1 + num2)}`
    input1.value = ''
    input2.value = ''
  } catch (error) {
    if ((isNaN(input1.value) || input1.value === '') && (isNaN(input2.value) || input2.value === '')) {
      input1.style.border = '1px solid red'
      input2.style.border = '1px solid red'
      input1.value = ''
      input2.value = ''
      p.innerHTML = 'Please insert valid numbers'
    }
    else if ((isNaN(input1.value) || input1.value === '') && !isNaN(input2.value)) {
      input1.style.border = '1px solid red'
      input2.style.border = '1px solid gray'
      input1.value = ''
      p.innerHTML = 'Please insert valid numbers'
    }
    else if ((isNaN(input2.value) || input2.value === '') && !isNaN(input1.value)) {
      input2.style.border = '1px solid red'
      input1.style.border = '1px solid gray'
      input2.value = ''
      p.innerHTML = 'Please insert valid numbers'
    }
  }
})
