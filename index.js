const Nightmare = require ('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('www.https://servicio.tech-niche.net')
  .type('#email', process.env.EMAIL)
  .type('#password', process.env.PW)
  .click('.btn-primary')
  .wait('.result')
  .evaluate(() => {
    let timeLog = document.querySelectorAll('td');

    // let jobTitles = document.querySelectorAll('.title')
    // let list = [].slice.call(jobTitles)
    // return list.map((node) => {
    //   return node.innerText
    // })
    return timeLog
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.error(err))