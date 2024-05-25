import { Time } from "@angular/common";


export class Category {
  constructor(
    public id: number,
    public created_at: Time,
    public updated_at: Time,
    public category: string,
    public type_id: number,
  
){}
}
