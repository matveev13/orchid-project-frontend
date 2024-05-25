import { Time } from "@angular/common";


export class Type {
  constructor(
    public id: number,
    public created_at: Time,
    public updated_at: Time,
    public type: string,
 
){}
}
