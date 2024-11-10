let TopBGCounter = 2

setInterval(() => {
    TopBackground = document.querySelector('section.backgroundImg')
    TopBackground.style.backgroundImage = `url("images/background${TopBGCounter}.jpg")`
    TopBGCounter+=1
    if (TopBGCounter == 4) {
        TopBGCounter = 1
    }
}, 3000);