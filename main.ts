input.onButtonPressed(Button.A, function () {
    Cambio_formas += 1
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.Ghost)
})
// Al agitar incrementar valor de la variable 1
input.onGesture(Gesture.Shake, function () {
    Contador_pasos += 1
    basic.showNumber(Contador_pasos)
})
input.onButtonPressed(Button.B, function () {
    Poner_nombre += 1
    basic.showString("MATIU")
    basic.showString("MATEO")
})
let Poner_nombre = 0
let Cambio_formas = 0
let Contador_pasos = 0
Contador_pasos = 0
basic.forever(function () {
	
})
