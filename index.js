import characterData from './data.js'
import { Character } from './Character.js'
import { getDiceRollArray } from './utils.js'

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

document.getElementById('attack-button').addEventListener("click", function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
})

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

render()
