export class Skill {
    id?:number;
    nombre:String;
    icono:String;
    progreso:number;

    constructor(nombre:String,icono:String,progreso:number){
        this.nombre = nombre;
        this.icono = icono;
        this.progreso = progreso;
    }
}
