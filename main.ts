basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (600 < pins.analogReadPin(AnalogPin.P1)) {
        music.ringTone(349)
    } else {
        basic.clearScreen()
    }
})
