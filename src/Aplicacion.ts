import { Plataforma } from "./Plataforma";

export class Aplicacion {
    plataformas:Plataforma[] 
    

    constructor( plataforma?:Plataforma) {
        if(plataforma) {
            this.plataformas = [plataforma] 
            plataforma.agregarAplicacion(this)
        } else{
            this.plataformas = [] 
        }
               
    }

    agregarPlataforma(plataforma:Plataforma) {
        this.plataformas.push(plataforma)
        plataforma.agregarAplicacion(this)
    }
}



//listartodaslas_plataformas// punto 1
