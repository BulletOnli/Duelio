import { characterData, skillCards } from "./characterData.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
    }

    randomSkill() {
        let randomSkill = skillCards[Math.floor(Math.random() * 3)]
        this.currentAttack.push(randomSkill)
    }

    attack(char) {
        this.randomSkill()
        const {skillName, value, icon} = this.currentAttack[0]
        char.health -= value

        if (char.health <= 0) {
            char.health = 0

            // end game function
            setTimeout(() => {
                if (this.health == 0 && char.health == 0){
                    document.querySelector('.gameContainer').innerHTML = `<div class="winnerSection">
                        <p class="winnerName">GAME OVER</p>
                        <img src="images/tombstone.png" alt="" class="tombstone">
                        <p class="winnerName">Both Dead</p>
                        <img src="images/playagain.png" alt="" class="playerAgain">
                    </div>` 
                    document.querySelector('.playerAgain').onclick = () => { window.location.reload() }
                } else {
                    document.querySelector('.gameContainer').innerHTML = this.renderWinner()
                    document.querySelector('.playerAgain').onclick = () => { window.location.reload() }
                }
                
            }, 1200)
        }
    }

    renderAttack() {
        const {skillName, value, icon} = this.currentAttack[0]
        
        return `<div class="skills">
            <img src="${icon}" alt="">
            <p>${skillName}: ${value}</p>
        </div>`
    }

    renderCharacter() {
        const {name, img, health} = this

        return `<img src="${img}" class="image">
        <p class="player">${name}</p>
        <p class="health">Health: ${health}</p>`
    }

    renderWinner() {
        const {name, img} = this
        
        return `<div class="winnerSection">
            <img src="images/winnerCrown.png" alt="" class="winnerCrown">
            <p class="header">WINNER</p>
            <img src="${img}" alt="" class="winnerImage">
            <p class="winnerName">${name}</p>
            <img src="images/playagain.png" alt="" class="playerAgain">
        </div>` 
    }
}

export default Character