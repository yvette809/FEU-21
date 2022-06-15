const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const dateEl = document.getElementById('date-picker')

const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')

let countdownTitle = ''
let countdownDate = ''
let countdownValue = new Date()
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// set date input min with today's date

const today = new Date().toISOString().split('T')[0]
console.log('today', today)
dateEl.setAttribute('min', today)

// populate countdown/ complete ui
function updateDom(){
   const countdownActive = setInterval(()=>{
    const now = new Date().getTime()
    const distance = countdownValue-now
    const days = Math.floor(distance/day)
    const hours = Math.floor((distance % day)/hour)
    const minutes =Math.floor((distance % hour)/minute)
    const seconds= Math.floor((distance % minute)/second)

    // populate countdown
countdownElTitle.textContent = `${countdownTitle}`
timeElements[0].textContent= `${days}`
timeElements[1].textContent= `${hours}`
timeElements[2].textContent= `${minutes}`
timeElements[3].textContent= `${seconds}`

    // hide input
    inputContainer.hidden = true
    // show countdown
    countdownEl.hidden = false

   },second)
    
}

// take values from form input

function updateCountdown(e){
    e.preventDefault()
   // countdownTitle = e.srcElement[0].value
    //countdownDate = e.srcElement[1].value
    countdownTitle = e.target[0].value
    countdownDate = e.target[1].value
    console.log(countdownTitle, countdownDate)
    // get number version of current date, updateDom
    countdownValue = new Date(countdownDate).getTime()
    console.log('countdownValue', countdownValue)
    updateDom()
}

// event listeners
countdownForm.addEventListener('submit',updateCountdown)