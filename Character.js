import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

const getPercentage = (remainingHealth, maximumHealth) => (remainingHealth * 100) / maximumHealth

function Character(data) {
    Object.assign(this, data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    this.maxHealth = this.health
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('')
    }

    this.takeDamage = attackScoreArray => {
        const totalAttackScore = attackScoreArray.reduce((total, currentNumber) => total + currentNumber)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0 
        }
    }

    this.getCharacterHtml = function() {
        const {elementId, name, avatar, health, diceCount, diceArray} = this
        let diceHtml = this.getDiceHtml(diceCount)

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">    
                    ${diceArray}
                </div>
            </div>`
    }
}

export {Character}