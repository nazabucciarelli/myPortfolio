export class Certification {
    id?:number;
    url_certificado: string;

    constructor(url_cert :string){
        this.url_certificado = url_cert;
    }
}
