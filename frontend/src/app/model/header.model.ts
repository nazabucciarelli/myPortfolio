export class Header {
    id?:number;
    urlgh: String;
    urlig: String;
    urllink: String;

    constructor(urlgh:String,urlig:String,urlink:String){
        this.urlgh = urlgh;
        this.urlig = urlig;
        this.urllink = urlink;
    }
}
