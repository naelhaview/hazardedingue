basic.forever(function () {
    MiniCar.motor(Motorlist.M1, Direction1.Forward, 106)
    MiniCar.motor(Motorlist.M2, Direction1.Forward, 106)
    if (MiniCar.ultra() < 10) {
        for (let index = 0; index < 100000000; index++) {
            MiniCar.motor(Motorlist.M1, Direction1.Forward, 106)
            MiniCar.motor(Motorlist.M2, Direction1.Forward, 106)
        }
    }
})
