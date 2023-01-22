import * as internal from "stream";

export class ProductDTO {
    constructor(

        public id?: number,
        public shopId?: number,
        public name?:string,
        public description?:string,
        public downloadurl?:string,
        public state?:string,
        public price?:number

    ){

    }

    
}
