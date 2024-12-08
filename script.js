let display = document.querySelector(".textDisplay")
let arrayDisplayValue

let allButtons = document.querySelectorAll(".button")

let funcButtons = document.querySelectorAll(".funcButton")
let numButtons = document.querySelectorAll(".numButton")

let sumButton = document.querySelectorAll(".sumButton")
let subButton = document.querySelectorAll(".subButton")
let multButton = document.querySelectorAll(".multButton")
let divButton = document.querySelectorAll(".divButton")
let modButton = document.querySelectorAll(".modButton")
let backSpaceButton = document.querySelectorAll(".backSpaceButton")
let equalButton = document.querySelectorAll(".equalButton")
let clearButton = document.querySelectorAll(".clearButton")
let dotButton = document.querySelectorAll(".dotButton")

let swichOperator = true
let haveADot = false

let buttonTemp
let displayValue = 0
let numberBefore, numberAfter
let operator

allButtons.forEach(n => {
  n.addEventListener("click", () => {
    console.log(n.innerHTML)
    buttonTemp = n.innerHTML
    
    if(n.classList.contains("numButton")) {
      if(displayValue == 0 && buttonTemp == 0) {
        return
      }
      
      arrayDisplayValue = String(displayValue).split('')
      if(arrayDisplayValue[0] == 0 && arrayDisplayValue[1] != ".") {
        arrayDisplayValue.shift()
      }
      arrayDisplayValue.push(buttonTemp)
      displayValue = arrayDisplayValue.join('')

      displayReolad()
      return
    }

    if(n.classList.contains("funcButton")){
      if(n.classList.contains("clearButton")) {
        displayValue = 0
        resetValues()
        displayReolad()
        return
      }
      
      if(n.classList.contains("dotButton")) {
        arrayDisplayValue = displayValue.toString().split("")
        arrayDisplayValue.forEach(n => {
          if(n == "."){
            haveADot = true 
          }
        })

        if(!haveADot) {
          arrayDisplayValue.push(".")
          displayValue = arrayDisplayValue.join("")
        }
        displayReolad()
      }
      
      if(n.classList.contains("backSpaceButton")) {
        let arrayDisplayValue = displayValue.toString().split("")
        arrayDisplayValue.pop()
        displayValue = arrayDisplayValue.join("")
        displayReolad()
      }
      
      if(n.classList.contains("equalButton")) {
        numberBefore = displayValue
        displayValue = eval(`${Number(numberAfter)} ${operator} ${Number(numberBefore)}`)
        swichOperator = true
        displayReolad()
        resetValues()
      }

      if(n.classList.contains("operatorButton")) {
        operator = defineOperator(buttonTemp)

        if(swichOperator) {
          numberAfter = displayValue 
          swichOperator = false
        }

        displayValue = 0
        displayReolad()
      }
    }
  })
})

function defineOperator(operator) {
  if(operator == "X") {
    return "*"
  }

  if(operator.length > 1) {
    return "%"
  }
  
  return operator
}

function resetValues() {
  numberBefore = ''
  numberAfter = ''
  operator = ``
}

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
