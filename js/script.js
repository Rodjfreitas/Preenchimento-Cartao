
const inputName = document.querySelector('#cardName')
const inputNumber = document.querySelector('#cardNumber')
const inputMonth = document.querySelector('#cardMonth')
const inputYear = document.querySelector('#cardYear')
const inputCvc = document.querySelector('#cardSecurity')
const confirm = document.querySelector('#confirmBtn')


inputName.addEventListener('change',insertName)
inputNumber.addEventListener('change',insertNumber)
inputMonth.addEventListener('change',insertDate)
inputYear.addEventListener('change',insertDate)
inputCvc.addEventListener('change',insertCVC)
confirm.addEventListener('click',confirmBtn)


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

function confirmBtn(){
  if(inputName.value != 0 &&
    inputNumber.value != 0 && inputMonth.value != 0 
    && inputYear != 0 && inputCvc.value != 0){
  alert(`Thank you! ${inputName.value} Weve added your card details Continue`)
  location.reload()
  }else{
  alert('Seus dados estão incompletos')
  }
}