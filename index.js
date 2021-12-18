const Nightmare = require ('nightmare');
const nightmare = Nightmare({ show: true });
require('dotenv').config()

function getTodaysDate() {
  const today = new Date()
  const month = today.getMonth()
  const day = today.getDay()
  const year = today.getFullYear()

  return `${month}/${day}/${year}`
}

function filterByDay() {
  const timeLogs = document.querySelectorAll('tr')
  const todaysDate = getTodaysDate()

  const todaysLogs = [...timeLogs].filter(timeLog => timeLog.childNodes[2].innerHTML === todaysDate)

  return todaysLogs
}

function evaluate() {

}

nightmare
  .goto('https://servicio.tech-niche.net/#/login?redirect=%2F')
  .type('#email', process.env.EMAIL)
  .type('#password', process.env.PW)
  .click('.btn-primary')
  .wait('.alert')
  .click('.btn-primary')
  .evaluate(elavuate())
  // .end()
  .then(result => console.log(result))
  .catch(err => console.error(err))
