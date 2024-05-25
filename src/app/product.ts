import { Time } from "@angular/common";


export class Product {
  constructor(
    public id: number,
    public created_at: Time,
    public updated_at: Time,
    public category_id: number,
    public sex: string,
    public color: string,
    public size: number,
    public price: number,
    public title: string,
    public description: string, 
    public  quantity_in_stock: number
){}
}
