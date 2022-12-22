const characterData = {
    hero: {
        name: "Bullet",
        img: "images/avatar.jpg",
        health: 100,
        currentAttack: []
    },

    villain: {
        name: "Chopper",
        img: "images/Chopper.jpg",
        health: 100,
        currentAttack: []
    },

    boss: {
        name: "Lucci",
        img: "images/Chopper.jpg",
        health: 500,
        currentAttack: []
    }
}

const skillCards = [
    {
        skillName: "Punch",
        value: 10,
        icon: "images/gloves.png"
    }, {
        skillName: "Attack",
        value: 20,
        icon: "images/swords2.png"
    }, {
        skillName: "Swing",
        value: 30,
        icon: "images/axe.png"
    }
]


export {characterData, skillCards}