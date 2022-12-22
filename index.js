import Character from "./app.js"
import {characterData, skillCards} from "./characterData.js"
import {pickingAnimation} from "./utils.js"

let gameRunning = false

function renderGame() {
    document.getElementById('heroContainer').innerHTML = mainCharacter.renderCharacter()
    document.getElementById('villainContainer').innerHTML = villain.renderCharacter()
}

document.querySelector('.fightBtn').addEventListener('click', () => {
    if (!gameRunning) {
        gameRunning = true
        pickingAnimation()
        document.querySelector('.fightBtn').innerHTML = ''

        setTimeout(() => {
            mainCharacter.attack(villain)
            villain.attack(mainCharacter)
            document.getElementById('playerOneAttack').innerHTML = mainCharacter.renderAttack()
            document.getElementById('playerTwoAttack').innerHTML = villain.renderAttack()
            renderGame()
            
            // Remove the chosen attack
            setTimeout(() => {
                mainCharacter.currentAttack = []
                villain.currentAttack = []
                document.getElementById('playerOneAttack').innerHTML = ''
                document.getElementById('playerTwoAttack').innerHTML = ''
                
                document.querySelector('.fightBtn').innerHTML = `<img src="images/fight.png" alt="">`
                gameRunning = false
            }, 2000)
        }, 2000)
    }
})

const mainCharacter = new Character(characterData.hero)
const villain = new Character(characterData.villain)

renderGame()