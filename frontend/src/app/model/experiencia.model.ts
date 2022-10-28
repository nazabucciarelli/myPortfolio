export class Experiencia{
    id?: number;
    nombre: String;
    descripcion: String;
    periodo: String;
    logo_empresa: String;

    constructor(nombre: String, descripcion: String,periodo:String,logo_empresa:String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.periodo = periodo;
        this.logo_empresa = logo_empresa;
    }
}
