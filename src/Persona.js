export class Persona {
  id;
  nombre;
  apellidos;
  nombre_completo;
  documento;
  celular;
  genero;
  constructor(id, nombre, apellidos, documento, celular, genero) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.documento = documento;
    this.celular = celular;
    this.nombre_completo = generarNombreCompleto(nombre, apellidos);
    this.genero = darGenero(genero);
  }
}

function darGenero(genero) {
  return genero === 1 ? "Masculino" : "Femenino";
}

function generarNombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}
