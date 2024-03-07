$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados
    var propietario = $("#propietario").val();
    var telefono = $("#telefono").val();
    var direccion = $("#direccion").val();
    var nombreMascota = $("#nombreMascota").val();
    var tipo = $("#tipo").val();
    var enfermedad = $("#enfermedad").val();

    // Mostrar los valores ingresados al final del formulario
    $("#resultado").html(`
                <p>Dueño: ${propietario}</p>
                <p>Telefono: ${telefono}</p>
                <p>Direccion: ${direccion}</p>
                <p>Nombre de la Mascota: ${nombreMascota}</p>
                <p>Tipo: ${tipo}</p>
                <p>Motivo de la Consulta: ${enfermedad}</p>
            `);
  });
});

/*Info de 3 tipos de animales Perros, Gatos, Conejos*/

/*Se crea la class Padre = Propietario*/
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return Propietario();
  }
}

/*se crea class hija*/
class Tipo extends Propietario {
  constructor(tipo) {
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}

/*2da class hija*/
class Nombre extends Propietario {
  constructor(nombre) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_Nombre) {
    this._nombre = nuevo_Nombre;
  }
}
