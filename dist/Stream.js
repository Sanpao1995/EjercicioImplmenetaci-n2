import { Canal } from "./Canal.js";
import { Categoria } from "./Categoria.js";
export class Stream {
    constructor(fecha, duracion, canal, categorias) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        //canal.agregarStream(this)
        this.categorias = categorias;
    }
    /*agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
    }*/
    //punto 7
    listar() {
        let canal = new Canal();
        let canales = [];
        canales = canal.listar();
        let catergoriastream1 = new Categoria("juegospus", "juego.jpg", "categoria de diversos juegos");
        let catergoriastream2 = new Categoria("historiasVIP", "VIP.jpg", "categoria de diversos historias");
        let catergoriastream3 = new Categoria("noticiasactual", "noti.jpg", "categoria de diversos noticias");
        let categrias = [];
        categrias.push(catergoriastream1);
        categrias.push(catergoriastream2);
        categrias.push(catergoriastream3);
        let stream1 = new Stream("02/05/2023", "30 min", canales[0], categrias);
        let stream2 = new Stream("1/04/2023", "20 min", canales[1], categrias);
        let stream3 = new Stream("4/07/2023", "49 min", canales[2], categrias);
        let arraystreams = [];
        arraystreams.push(stream1);
        arraystreams.push(stream2);
        arraystreams.push(stream3);
        console.log(arraystreams);
        return arraystreams;
    }
    //punto 8
    detalle() {
        let stramdll = new Stream();
        var fecha_Stream = prompt("Ingrese la fecha de un Stream");
        let arrarstream = [];
        arrarstream = this.listar();
        for (let i = 0; i < arrarstream.length; i++) {
            if (arrarstream[i].fecha == fecha_Stream) {
                stramdll = arrarstream[i];
            }
        }
        console.log(stramdll);
        return stramdll;
    }
    //punto 12: Agregar un stream
    agregar() {
        var fecha = prompt("Ingrese la fecha de stream");
        var duracion = prompt("Ingrese la duración del stream");
        var nombre_canal = prompt("Ingrese el nombre del canal");
        var banner_canal = prompt("Ingrese el banner");
        var descripcion_canal = prompt("Ingrese la descripcion del canal");
        let canalnuevostream = new Canal(nombre_canal, banner_canal, descripcion_canal);
        var nombre_categoria = prompt("Ingrese el nombre de la categoria");
        var imagen_categoria = prompt("Ingrese laimagen de la categoria");
        var descripcion_categoria = prompt("Ingrese la descripcion de la categoria");
        let categorianueva = new Categoria(nombre_categoria, imagen_categoria, descripcion_categoria);
        let arrayCategoria = [];
        arrayCategoria.push(categorianueva);
        let stream = new Stream(fecha, duracion, canalnuevostream, arrayCategoria);
        console.log(stream);
    }
}
