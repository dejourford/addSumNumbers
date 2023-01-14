const numberOneBtn = document.querySelector('#one')
const numberThreeBtn =  document.querySelector('#plusThree')
const numberNineBtn = document.querySelector('#plusNine')
const numberTwoBtn = document.querySelector('#minusTwo')
let message = document.querySelector('.message')
let result = 0

const numberOneBtnValue = Math.floor(numberOneBtn.textContent)
const numberThreeBtnValue = Math.floor(numberThreeBtn.textContent)
const numberNineBtnValue = Math.floor(numberNineBtn.textContent)
const numberTwoBtnValue = Math.floor(numberTwoBtn.textContent)





numberOneBtn.addEventListener('click', function(){
    result = 0
    message.textContent = `Result: ${result}`
})

numberThreeBtn.addEventListener('click', function(){
    result += numberThreeBtnValue
    message.textContent = `Result: ${result}`
})

numberNineBtn.addEventListener('click', function(){
    result += numberNineBtnValue
    message.textContent = `Result: ${result}`
})

numberTwoBtn.addEventListener('click', function(){
    result += numberTwoBtnValue
    message.textContent = `Result: ${result}`
})