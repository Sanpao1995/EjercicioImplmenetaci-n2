import { Streamer } from "./Streamer.js";
export class Canal {
    constructor(nombre, banner, descripcion_detallada, streamer) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion_detallada = descripcion_detallada;
        this.streamer = streamer;
        //streamer.agregarCanal(this)!;
        this.streaming = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    /*agregarStream(stream:Stream){
        this.streaming.push(stream)!;
    }*/
    mostrarStreamer() {
        return this.streamer;
    }
    //Punto 3
    listar() {
        ///streamer
        let streamer1 = new Streamer("juan1Juego", "competencia de juegos", "facebook:juan1");
        let streamer2 = new Streamer("Pepehistoria", "cuentos, historias", "facebook:pepe_historia2");
        let streamer3 = new Streamer("tatiana lopez", "informacion de noticias", "instagram:tatianalo_noti");
        let arraystreamers = [];
        arraystreamers.push(streamer1);
        arraystreamers.push(streamer2);
        arraystreamers.push(streamer3);
        let canal1 = new Canal("unronplay", "uron_banner", "canal de contenido digital", streamer1);
        let canal2 = new Canal("Classplay", "class_banner", "canal de contenido digital y entrevistas", streamer2);
        let canal3 = new Canal("newTV", "tv_banner", "canal de contenido digital y noticias", streamer3);
        let arrayCanales = [];
        arrayCanales.push(canal1);
        arrayCanales.push(canal2);
        arrayCanales.push(canal3);
        console.log(arrayCanales);
        return arrayCanales;
    }
    // Punto 4
    detalle() {
        let can = new Canal();
        var nombre_Canal = prompt("Ingrese el nombre de un canal");
        let canales = [];
        canales = this.listar();
        for (let i = 0; i < canales.length; i++) {
            if (canales[i].nombre == nombre_Canal) {
                can = canales[i];
            }
        }
        console.log(can);
        return can;
    }
    //Solución al punto 10: agrger un canal
    agregar() {
        var nombre = prompt("Ingrese el nombre del canal");
        var banner = prompt("Ingrese el banner");
        var descripcion = prompt("Ingrese la descripcion ddel canal");
        var nickname_streamer = prompt("Ingrese el nickname del streamer");
        var redesSociales_streamer = prompt("Ingrese red social destreamer");
        var descripcion_streamer = prompt("Ingrese la descripcion ddel streamer");
        let streaming = new Streamer(nickname_streamer, descripcion_streamer, redesSociales_streamer);
        let canalnuevo = new Canal(nombre, banner, descripcion, streaming);
        console.log(canalnuevo);
    }
}
