// globals
let goalNum
let currNum
let totalGames = 0
let wins = 0
let losses = 0
let isDone = false

// game initializer
const init = _ => {
  // set isDone false for game progress
  isDone = false
  // reset current guess value
  currNum = 0
  // new random number to approach
  goalNum = Math.floor(Math.random() * 100) + 1
  // reset goalNum and currNum display to initial state
  document.querySelector('#goalNum').textContent = `Goal Number : ${goalNum}`
  document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
  document.querySelector('#result').textContent = ''
  
}

for (let i = 0; i < document.querySelectorAll('.character').length; i++)
{
 let randNum = Math.floor(Math.random() * 20) + 1
 console.log(randNum)
 document.querySelectorAll('.character')[i].setAttribute('data-btn-value',randNum)
}

console.log(document.querySelectorAll('.character'))

// listener for random number buttons
document.addEventListener('click', e => {
  // make sure thing clicked is random number button and that the game has not ended yet
  if (e.target.className === 'character responsive-img' && !isDone) {
    // grab the number from the data-value attribute and parse it

    let imgValue = e.target.getAttribute('data-btn-value')

    currNum += parseInt(imgValue)
    // update the current value display
    
    document.querySelector('#currNum').textContent = `Current Num: ${currNum}`
    // win case :
    if (currNum === goalNum) {
      // display success message
      document.querySelector('#result').textContent = 'You Won! Starting New Game...'
      // increment wins up
      wins++
      //increment the total games played
      totalGames++
      // display the new wins count
      document.querySelector('#wins').textContent = `Wins : ${wins}`
      document.querySelector('#totalGamesPlayed').textContent= `Games Played: ${totalGames}`
      // sets the game to be over
      isDone = true
      // lose case :
      init()
    } else if (currNum > goalNum) {
      // display fail message
      document.querySelector('#result').textContent = 'You Lost! Starting New Game...'
      // increment losses up
      losses++
      //increment the total games played
      totalGames++
      // display losses count
      document.querySelector('#losses').textContent = `Losses: ${losses}`
      document.querySelector('#totalGamesPlayed').textContent= `Games Played: ${totalGames}`
      // sets game to be over
      isDone = true
      init()
      // playing case :
    } else {
      // displays message to keep playing
      document.querySelector('#result').textContent = 'Keep adding numbers...'
    }
  }
})

// initialize values for app start
init()
