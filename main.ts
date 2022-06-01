basic.forever(function () {
	
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        servos.P2.setAngle(30)
        basic.showIcon(IconNames.Heart)
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        servos.P2.setAngle(130)
    }
})
