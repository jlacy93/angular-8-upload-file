export class Cat{
    id: string;
    microchipNumber: string;
    name: string;
    color: string;
    image: string;
    fileName: string;
    data: Blob;
    fileDownloadUri: string;

    constructor(id: string, microchipNumber:string, name: string, color: string, image: string, fileName: string, data: Blob, fileDownloadURI: string){
        this.id=id;
        this.microchipNumber=microchipNumber;
        this.name=name;
        this.color=color;
        this.image=image;
        this.fileName=fileName;
        this.data=data;
        this.fileDownloadUri=fileDownloadURI;
    }

}