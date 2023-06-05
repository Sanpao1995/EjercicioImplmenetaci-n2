export class Categoria {
    constructor(nombre, imagenCategroria, descripcionCategoria) {
        this.nombre = nombre;
        this.imagenCategroria = imagenCategroria;
        this.descripcionCategoria = descripcionCategoria;
        this.streaming = [];
    }
    agregarStream(stream) {
        this.streaming.push(stream);
    }
    listar() {
        let catergoriastream1 = new Categoria("juegospus", "juego.jpg", "categoria de diversos juegos");
        let catergoriastream2 = new Categoria("historiasVIP", "VIP.jpg", "categoria de diversos historias");
        let catergoriastream3 = new Categoria("noticiasactual", "noti.jpg", "categoria de diversos noticias");
        let categorias = [];
        return categorias;
    }
}
