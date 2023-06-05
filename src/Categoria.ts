import { Stream } from "./Stream"

export class Categoria {
    nombre:string | undefined
    imagenCategroria: string | undefined
    descripcionCategoria: string | undefined

    streaming:Stream []

    constructor(nombre?:string,imagenCategroria?: string,descripcionCategoria?:string){
        this.nombre=nombre
        this.imagenCategroria=imagenCategroria
        this.descripcionCategoria=descripcionCategoria
        this.streaming = []

    }

    agregarStream(stream:Stream){
        this.streaming.push(stream)
    }

    listar():Categoria[]{
        let catergoriastream1 = new Categoria ("juegospus","juego.jpg","categoria de diversos juegos");
        let catergoriastream2 = new Categoria ("historiasVIP","VIP.jpg","categoria de diversos historias");
        let catergoriastream3 = new Categoria ("noticiasactual","noti.jpg","categoria de diversos noticias");
        let categorias: Categoria [] = [];
        return categorias;
    }

}

