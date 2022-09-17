export interface UserModel {
  id?:number;
  name:string;
  email:string;
  phone:string;
  address:{
    street:string,
    city:string,
  },
  gender:string

}
