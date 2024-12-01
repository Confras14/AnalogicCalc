let display = document.querySelector(".textDisplay")
let funcButtons = document.querySelectorAll(".funcButton")
let numButtons = document.querySelectorAll(".numButton")
let allButtons  = document.querySelectorAll("button")

let buttonTemp
let displayValue = 0
let numberTemp1 = displayValue
let operador

allButtons.forEach(n => {
  n.addEventListener("click", () => {
    console.log(n.innerHTML)

    buttonTemp = n.innerHTML

    // Funcionais
    if (n.classList.contains("funcButton")) {
      if(buttonTemp.length > 1) {
        let arrayDisplayValue = String(displayValue).split('')
        arrayDisplayValue.pop()
        displayValue = arrayDisplayValue.join('')
        displayReolad() 
        return
      }

      if(buttonTemp === 'C') {
        displayValue = 0
        displayReolad()
        return
      }

      if(buttonTemp === ',') {
        let arrayDisplayValue = String(displayValue).split('')
        arrayDisplayValue.push('.')
        displayValue = arrayDisplayValue.join('')
        displayReolad()
        return
      }

      if(buttonTemp === '+') {
        numberTemp1 = displayValue
        displayValue = ''
        operador = '+'
        return
      }

      if(buttonTemp === '-') {
        numberTemp1 = displayValue
        displayValue = ''
        operador = '-'
        return
      }

      if(buttonTemp === 'X') {
        numberTemp1 = displayValue
        displayValue = ''
        operador = '*'
        return
      }

      if(buttonTemp === '/') {
        numberTemp1 = displayValue
        displayValue = ''
        operador = '/'
        return
      }

      if(buttonTemp === '%') {
        numberTemp1 = displayValue
        displayValue = ''
        operador = '%'
        return
      }

      if(buttonTemp === '=') {
        switch (operador) {
          case '+':
            displayValue = `${Number(numberTemp1) + Number(displayValue)}`
            break
          case '-':
            displayValue = `${Number(numberTemp1) - Number(displayValue)}`
            break
          case '/':
            displayValue = `${Number(numberTemp1) / Number(displayValue)}`
            break
          case '*':
            displayValue = `${Number(numberTemp1) * Number(displayValue)}`
            break
          case '%':
            displayValue = `${Number(numberTemp1) % Number(displayValue)}`
            break
        }
        
        operador = null
        numberTemp1 = null
        
        displayReolad()
        return
      }
    }
    
    // Numero
    if (n.classList.contains("numButton")) {

      if(displayValue == 0 && buttonTemp == 0) {
        return
      }
      
      let arrayDisplayValue = String(displayValue).split('')
      if(arrayDisplayValue[0] == 0) {
        arrayDisplayValue.shift()
      }
      arrayDisplayValue.push(buttonTemp)
      displayValue = arrayDisplayValue.join('')

      displayReolad()
      return
    }
  })
})

function displayReolad() {
  display.innerHTML = displayValue
  if(displayValue == 0) {
    display.innerHTML = 0
  }
  displayLimit()
}

function displayLimit() {
  let displayTemp = display.innerHTML.split('')
  if(displayTemp.length > 14) {
    while(displayTemp.length > 14) {
      displayTemp.pop()
      displayTemp.join('a')
      display.innerHTML = 'LimiteAtingido'
    }
  }
}
