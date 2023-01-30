
const inputName = document.querySelector('#cardName')
const inputNumber = document.querySelector('#cardNumber')
const inputMonth = document.querySelector('#cardMonth')
const inputYear = document.querySelector('#cardYear')
const inputCvc = document.querySelector('#cardSecurity')


inputName.addEventListener('keydown',insertName)
inputNumber.addEventListener('keydown',insertNumber)
inputMonth.addEventListener('keydown',insertDate)
inputYear.addEventListener('keydown',insertDate)
inputCvc.addEventListener('keydown',insertCVC)



function insertName (){
  const name = document.querySelector('.nameDate')
  name.innerText = inputName.value
  
}

function insertNumber(){
  const number = document.querySelector('.number')
  number.innerText = inputNumber.value
}

function insertDate(){
  const date = document.querySelector('.date')
  date.innerText = `${inputMonth.value}/${inputYear.value}`
  console.log(date)
}

function insertCVC(){
  const cvc = document.querySelector('.cvc')
  cvc.innerText = inputCvc.value
}