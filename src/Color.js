export class Color {
  r;
  g;
  b;
  constructor(r, g, b) {
    this.r = validarValor(r);
    this.g = validarValor(g);
    this.b = validarValor(b);
  }
}

function validarValor(valor) {
  if (typeof valor === "number") {
    if (valor >= 0 && valor <= 255) {
      return valor;
    }
    else {
        throw new Error("El numero debe estar en el rango [0,255]");
    }
  } else {
    throw new Error("El valor ingresado es incorrecto!");
  }
}
