// skill picking animation
function pickingAnimation() {
    let pickInterval = setInterval(function() {
        const skillSets = document.querySelectorAll('.skills')

        let randomIndex1 = Math.floor(Math.random() * skillSets.length)
        skillSets[randomIndex1].style.borderColor = 'white'

        let randomIndex2 = Math.floor(Math.random() * skillSets.length)
        skillSets[randomIndex2].style.borderColor = 'white'
    
        // remove the highlight afterwards
        setTimeout(() => {
            skillSets[randomIndex1].style.borderColor = 'black'
            skillSets[randomIndex2].style.borderColor = 'black'
        }, 100)
        
    }, 100)

    // stop the picking animation
    setTimeout(() => {
        clearInterval(pickInterval)
    }, 2000)
}

export {pickingAnimation}