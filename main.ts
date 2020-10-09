basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 20) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Heart)
    } else if (600 < pins.analogReadPin(AnalogPin.P1)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Duck)
    } else {
        basic.clearScreen()
    }
})
