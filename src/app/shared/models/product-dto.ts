import * as internal from "stream";

export class ProductDTO {
    constructor(

        public id?: Number,
        public shopId?: Number,
        public name?:string,
        public description?:string,
        public downloadurl?:string,
        public state?:string,
        public price?:number

    ){

    }

    
}
