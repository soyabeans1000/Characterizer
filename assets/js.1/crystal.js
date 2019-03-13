// globals
let goalNum
let currNum
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
  document.querySelector('#gameMessage').textContent = "NEW GAME"
}

console.log(document.querySelectorAll('.character'))

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
  console.log("inside event handler" + e)
  if (e.target.className === 'character responsive-img' && !isDone) {
    // grab the number from the data-value attribute and parse it

    let imgValue = e.target.getAttribute('data-btn-value')

    console.log(imgValue)

    currNum += parseInt(imgValue)
    // update the current value display
    document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
    // win case :
    if (currNum === goalNum) {
      // display success message
      document.querySelector('#result').textContent = 'Congrats! You Won!'
      // increment wins up
      wins++
      // display the new wins count
      document.querySelector('#wins').textContent = `Wins : ${wins}`
      // sets the game to be over
      isDone = true
      // lose case :
    } else if (currNum > goalNum) {
      // display fail message
      document.querySelector('#result').textContent = 'You Lost!'
      // increment losses up
      losses++
      // display losses count
      document.querySelector('#losses').textContent = `Losses: ${losses}`
      // sets game to be over
      isDone = true
      // playing case :
    } else {
      // displays message to keep playing
      document.querySelector('#result').textContent = 'Keep collecting characters...'
      document.querySelector('#gameMessage').textContent = ""
    }
  }
})

// initialize values for app start
init()
