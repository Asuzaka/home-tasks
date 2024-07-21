let RandomNumber = Math.round(Math.random() * 20)
const input = document.getElementById('input')
const status = document.querySelector('.status')
const htmlscore = document.querySelector('.score')
const htmlhighscore = document.querySelector('.highscore')
const guessNumber = document.querySelector('.guess-number').children[0]

let overallScore = 0
let score = 20
let win = false

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        if (!win) {
            if (input.value == RandomNumber) {
                guessNumber.textContent = RandomNumber
                overallScore += score
                score = 20
                RandomNumber = Math.round(Math.random() * 20)
            }
            else if (input.value > RandomNumber) {
                status.textContent = 'Status : your number is bigger'
                score--
                setTimeout(() => {
                    status.textContent = 'Status: '
                }, 2000)
            }
            else if (input.value < RandomNumber) {
                status.textContent = 'Status : your number is smaller'
                score--
                setTimeout(() => {
                    status.textContent = 'Status :'
                }, 2000)
            }

            htmlscore.textContent = `Score: ${score}`
            htmlhighscore.textContent = `Highscore ${overallScore}`
        }
    }
    else {
        win = false
        guessNumber.textContent = '?'
    }
})