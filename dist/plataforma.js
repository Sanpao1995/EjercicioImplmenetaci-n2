export class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    //Punto1
    listar() {
        let plataformas = [];
        let plata1 = new Plataforma("twictchone", "logotw.jpg", "para transmitir partidas de juegos y competencias en vivo", "Pepsico");
        let plata2 = new Plataforma("youtube", "logoyoutube.jpg", "es una plataforma para todas las categorias de steaming", "CocaCola");
        let plata3 = new Plataforma("tiktoklive", "logoticktok.jpg", "plataforma con diversos contenidos", "Apple");
        plataformas.push(plata1);
        plataformas.push(plata2);
        plataformas.push(plata3);
        console.log(plataformas);
        return plataformas;
    }
    // Punto 2
    detalle() {
        let pla = new Plataforma();
        var nombre_plataforma = prompt("Ingrese el nombre de la plataforma");
        let plataformas = [];
        plataformas = this.listar();
        for (let i = 0; i < plataformas.length; i++) {
            if (plataformas[i].nombre == nombre_plataforma) {
                pla = plataformas[i];
            }
        }
        console.log(pla);
        return pla;
    }
    //Solución al punto 9: agrger una plataforma
    agregar() {
        var nombre = prompt("Ingrese el nombre de la plataforma");
        var logo = prompt("Ingrese el logo de la plataforma");
        var descripcion = prompt("Ingrese la descripcion de la plataforma");
        var patrocinador = prompt("Ingrese el nombre del patrocinador de la plataforma");
        let plataformaNueva = new Plataforma(nombre, logo, descripcion, patrocinador);
        console.log(plataformaNueva);
    }
}
