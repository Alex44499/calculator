
function calculator() {
	// Selectors
	const previous = document.querySelector(".previous")
	const current = document.querySelector(".current")
	const numbers = document.querySelectorAll(".number")
	const operations = document.querySelectorAll(".operation")
	const clear = document.querySelector(".clear")
	const deleteButton = document.querySelector(".delete")

	const equal = document.querySelector(".equals")

	let currentOperand = ""
	let previousOperand = ""
	let operation = undefined


	// Operation with buttons 
	function handleButtons() {
		// eventListener for numbers  
		numbers.forEach(button => {
			button.addEventListener("click", () => {
				currentOperand === 0 ? currentOperand = "" : ''
				console.log(button)
				if (button.textContent === "." && currentOperand.includes(".")) return
				currentOperand += button.textContent.toString()
				console.log(currentOperand)
				updateDisplay()
			})
		})

		// eventlistener for operations 
		operations.forEach(operationButtons => {
			operationButtons.addEventListener("click", () => {
				console.log(operationButtons)
				if (currentOperand === "") return
				operation = operationButtons.textContent
				mathematicalOperations()
				updateDisplay()
			})
		})


		// eventlistener for clear button 



		clear.addEventListener("click", () => {
			currentOperand = 0
			previousOperand = " "
			operation = undefined
			updateDisplay()

		})


		// eventlistener for delete button 
		deleteButton.addEventListener("click", () => {
			let temporaryValue

			if (currentOperand === "Division by 0 is not allowed") {
				currentOperand = 0
				temporaryValue = currentOperand
			}

			else {
				temporaryValue = currentOperand.toString().slice(0, -1)
			}

			if (temporaryValue === "" || temporaryValue === 0) {
				temporaryValue = 0
				currentOperand = temporaryValue
				updateDisplay()
			}
			else {
				currentOperand = parseFloat(temporaryValue)
				updateDisplay()
			}

		})

		equal.addEventListener("click", () => {
			calculateResult()
			updateDisplay()

		})

	}


	function mathematicalOperations() {
		if (currentOperand === "") return
		if (previousOperand !== "") {
			calculateResult()
		}

		previousOperand = `${currentOperand}${operation}`
		currentOperand = ""
	}


	function calculateResult() {
		let currentValue = parseFloat(currentOperand)
		let previousValue = parseFloat(previousOperand)
		let result
		if (isNaN(currentValue) || isNaN(previousValue)) return
		operation === "+" ? result = currentValue + previousValue
			: operation === "-" ? result = previousValue - currentValue
				: operation === "/" && currentValue === 0 ? result = "Division by 0 is not allowed"

					: operation === "/" ? result = previousValue / currentValue

						: operation === "*" ? result = previousValue * currentValue

							: ""


		currentOperand = result
		operation = undefined
		previousOperand = ""
	}


	function updateDisplay() {

		current.textContent = currentOperand
		previous.textContent = previousOperand

	}
	handleButtons()

}

calculator()