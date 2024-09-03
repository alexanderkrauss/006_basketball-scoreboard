let scoreLeft = 0
let scoreRight = 0

let countHome = document.getElementById('count-home')
let countGuest = document.getElementById('count-guest')

countHome.textContent = scoreLeft
countGuest.textContent = scoreRight

function leadd1() {
  scoreLeft += 1
  countHome.textContent = scoreLeft 
}

function leadd2() {
  scoreLeft += 2
  countHome.textContent = scoreLeft 
}

function leadd3() {
  scoreLeft += 3
  countHome.textContent = scoreLeft 
}

function readd1() {
  scoreRight += 1
  countGuest.textContent = scoreRight 
}

function readd2() {
  scoreRight += 2
  countGuest.textContent = scoreRight 
}

function readd3() {
  scoreRight += 3
  countGuest.textContent = scoreRight 
}

function resetcounter() {
  countGuest.textContent = 0
  countHome.textContent = 0
  scoreLeft = 0
  scoreRight = 0
}