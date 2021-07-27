radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let radio2 = 1
basic.showString("" + (radio2))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(0)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("ralla")
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio2 += 1
        radio.setGroup(radio2)
        if (radio2 == 8) {
            radio2 = 1
            radio.setGroup(radio2)
            basic.showString("" + (radio2))
        }
        basic.showString("" + (radio2))
    }
})
