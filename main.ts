function sol () {
    basic.showIcon(IconNames.Square)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "tempesta") {
        tempesta()
    }
    if (receivedString == "pluja") {
        pluja()
    }
    if (receivedString == "arc") {
        arc()
    }
    if (receivedString == "sol") {
        sol()
    }
})
function arc () {
    basic.showIcon(IconNames.Heart)
    strip.showRainbow(1, 360)
}
function pluja () {
    basic.showIcon(IconNames.Sword)
    for (let index = 0; index < 4; index++) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        for (let index = 0; index < 29; index++) {
            strip.shift(1)
            strip.show()
            basic.pause(100)
        }
    }
}
function tempesta () {
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.Skull)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(randint(100, 200))
        strip.showColor(randint(100, 200))
        basic.pause(100)
    }
}
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
