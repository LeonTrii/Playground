//With help from https://www.udemy.com/course/code-your-first-game/
//It is a nice guide!

window.onload = () => {
    mouse = evt => {
        let root = document.documentElement //Black screen
        let rect = canvas.getBoundingClientRect()
        let mouseX = evt.clientX - rect.left - root.scrollLeft
        let mouseY = evt.clientY - rect.top - root.scrollTop
        return {
            x:mouseX,
            y:mouseY
        }
    }

    computer = () => {
        let centerPaddle = paddleTwoY + (120 / 2)
        if (centerPaddle < ballY) {
            paddleTwoY += 6
        } else {
            paddleTwoY -= 6
        }
    }

    reset = () => {
        ballX = canvas.width / 2
        ballY = canvas.height / 2
    }

    let ballX = 50
    let ballY = 50
    let speedX = 5
    let speedY = 5
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    setInterval(() => {draw(), setBall()}, 1000 / 100); //120 FPS
    let paddleOneY = 250
    let paddleTwoY = 250
    let playerOne = 0;
    let playerTwo = 0;
    canvas.addEventListener('mousemove', evt => {
        let mousePos = mouse(evt)
        paddleOneY = mousePos.y - (120 / 2)
    })
    
    setBall = () => {
        ballX += speedX //Speed of the ball
        ballY += speedY
        if (ballX == canvas.width) {
            if (ballY > paddleTwoY && ballY < paddleTwoY + 120) {
                speedX = -5
            } else {
                speedX = 5;
                reset()
                playerOne++;
            }
        } else if (ballX == 0) {
            if (ballY > paddleOneY && ballY < paddleOneY + 120) {
                speedX = 5
            } else {
                speedX = 5
                reset()
                playerTwo++;
            }
        }

        if (ballY == canvas.height) {
            speedY = -5 
        } else if (ballY == 0) {
            speedY = 5
        }

        context.fillStyle = 'white' //Ball
        context.beginPath()
        context.arc(ballX, ballY, 15, 0, Math.PI*2)
        context.fill()
    }

    draw = () => {
        computer()
        context.fillStyle = '#213769' //Screen
        context.fillRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = 'white' //Left paddle
        context.fillRect(0, paddleOneY, 10, 120)
        context.fillStyle = 'white' //Right paddle
        context.fillRect(790, paddleTwoY, 10, 120)

        context.font = '60px Arial'
        context.fillText(playerOne, 100, 100)
        context.fillText(playerTwo, canvas.width - 120, 100)
    }
}

