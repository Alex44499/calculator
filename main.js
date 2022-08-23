const calcInput = document.querySelector('.display')
const allButtons = document.querySelectorAll('.button')

// Add values on display

allButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.dataset.value
    if (value === '=') {
      if (calcInput.innerText.includes('/')) {
        const splitData = calcInput.innerText.split('/')
        operate('/', splitData[0], splitData[1])
      }
      if (calcInput.innerText.includes('-')) {
        const splitData = calcInput.innerText.split('-')
        operate('-', splitData[0], splitData[1])
      }
      if (calcInput.innerText.includes('+')) {
        const splitData = calcInput.innerText.split('+')
        operate('+', splitData[0], splitData[1])
      }
      if (calcInput.innerText.includes('*')) {
        const splitData = calcInput.innerText.split('*')
        operate('*', splitData[0], splitData[1])
      }
    }


    if (calcInput.innerText.length <= 8) {
      calcInput.innerText += value
      calcInput.innerText = calcInput.innerText.replace('=', '')
    }

	 if (calcInput.innerText.startsWith('/')) {
		calcInput.innerText = ''
	 }
	 else if (calcInput.innerText.startsWith('*')) {
		calcInput.innerText = ''
	 }
	//  else if (calcInput.innerText.startsWith('-')) {
	// 	calcInput.innerText = ''
	//  }
	 else if (calcInput.innerText.startsWith('+')) {
		calcInput.innerText = ''
	 }


    if (value === 'clear') {
      calcInput.innerText = ''
    }
  }
  
 
  )
})

const operate = (operator, value1, value2) => {
  const num1 = Number(value1)
  const num2 = Number(value2)

  if (operator === '*') {
    calcInput.innerText = num1 * num2
  }

  else if (operator === '+') {
    calcInput.innerText = num1 + num2
  }
  else if (operator === '-') {
    calcInput.innerText = num1 - num2
  }
  else if (operator === '/') {
    calcInput.innerText = num1 / num2
  }
}
