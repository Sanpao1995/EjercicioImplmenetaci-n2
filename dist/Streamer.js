import { Canal } from "./Canal.js";
import { Stream } from "./Stream.js";
import { Categoria } from "./Categoria.js";
export class Streamer {
    constructor(nickname, descripcion, redesSociales, canales, stream) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = canales;
        this.stream = stream;
    }
    //punto 5
    listar() {
        ///streamer
        let streamer1 = new Streamer("juan1Juego", "competencia de juegos", "facebook:juan1");
        let streamer2 = new Streamer("Pepehistoria", "cuentos, historias", "facebook:pepe_historia2");
        let streamer3 = new Streamer("tatiana lopez", "informacion de noticias", "instagram:tatianalo_noti");
        let arraystreamers = [];
        arraystreamers.push(streamer1);
        arraystreamers.push(streamer2);
        arraystreamers.push(streamer3);
        console.log(arraystreamers);
        return arraystreamers;
    }
    //punto 6
    detalle() {
        let strdll = new Streamer();
        var nombre_Streamer = prompt("Ingrese el nickname de un Streamer");
        let streamers = [];
        streamers = this.listar();
        for (let i = 0; i < streamers.length; i++) {
            if (streamers[i].nickname == nombre_Streamer) {
                strdll = streamers[i];
            }
        }
        console.log(strdll);
        return strdll;
    }
    //Solución al punto 11: agrger un streamer
    agregar() {
        var nickname = prompt("Ingrese el nickname");
        var descripcion_str = prompt("Ingrese la describción");
        var redesSociales = prompt("Ingrese la res social");
        //var nombre_canal: string =prompt("Ingrese el nombre del canal")!;
        //var banner_canal: string =prompt("Ingrese el banner")!;
        //var descripcion_canal: string =prompt("Ingrese la descripcion ddel canal")!;
        //let canal = new Canal (nombre_canal, banner_canal, descripcion_canal,);
        let streamer_nuevo = new Streamer(nickname, descripcion_str, redesSociales);
        console.log(streamer_nuevo);
    }
    //solucion punto 13: Agregar un canal a un streamer
    agregar_canal_streamer() {
        var _a;
        var nombrecanal = prompt("Ingrese el nombre del canal");
        var bannercanal = prompt("Ingrese el banner  del canal");
        var descripcioncanal = prompt("Ingrese la descripcion del  canal");
        let canalNuevo = new Canal(nombrecanal, bannercanal, descripcioncanal);
        var nickname_streamer = prompt("Ingrese el nickname del  streamer");
        let arraystreamers = [];
        let canalesNuevos = [];
        arraystreamers = this.listar();
        for (let i = 0; i < arraystreamers.length; i++) {
            if (arraystreamers[i].nickname == nickname_streamer) {
                canalesNuevos.push(canalNuevo);
                if (arraystreamers[i].canales == undefined) {
                    arraystreamers[i].canales = canalesNuevos;
                }
                else {
                    (_a = arraystreamers[i].canales) === null || _a === void 0 ? void 0 : _a.push(canalNuevo);
                }
            }
        }
        console.log(arraystreamers);
    }
    agregar_stream_streamer() {
        var fecha_stream = prompt("Ingrese la fecha del stream");
        var duracion_stream = prompt("Ingrese la duracion de stream");
        var canal_stream = prompt("Ingrese el canal del stream");
        var categorias_stream = prompt("Ingrese la categoria del stream");
        let can = new Canal();
        let canales = [];
        canales = can.listar();
        for (let i = 0; i < canales.length; i++) {
            if (canales[i].nombre == canal_stream) {
                can = canales[i];
            }
        }
        let cat = new Categoria();
        let categorias = [];
        categorias = cat.listar();
        for (let j = 0; j < categorias.length; j++) {
            if (categorias[j].nombre == categorias_stream) {
                cat = categorias[j];
            }
        }
        let array_categorias = [];
        array_categorias.push(cat);
        let nuevo_stream = new Stream(fecha_stream, duracion_stream, can, array_categorias);
        var nickname_streamer = prompt("Ingrese el nickname del  streamer");
        let arraystreamers = [];
        arraystreamers = this.listar();
        for (let i = 0; i < arraystreamers.length; i++) {
            if (arraystreamers[i].nickname == nickname_streamer) {
                arraystreamers[i].stream = nuevo_stream;
            }
        }
        console.log(arraystreamers);
    }
}
