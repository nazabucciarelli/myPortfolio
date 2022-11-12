export class Proyecto {
    id?:number;
    nombre: string;
    fecha: string;
    descripcion: string;
    url_imagen: string;
    github_link: string;

    constructor(nombre: string, fecha:string,descripcion:string,url_imagen:string,github_link:string){
        this.nombre = nombre;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.url_imagen = url_imagen;
        this.github_link = github_link;
    }
}
