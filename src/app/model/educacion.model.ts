export class Educacion {
    id?: number;
    nombre: string;
    descripcion: string;
    periodo: string;
    logo_educacion:string;

    constructor(nombre:string,descripcion:string,periodo:string,logo_educacion:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.logo_educacion = logo_educacion;
    }
}
