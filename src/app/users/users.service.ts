import { Injectable } from '@angular/core';
import { Role } from '../shared/models/role.modal';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  dataSource:Array<User> =[];  
  constructor() { 
    this.dataSource =[
      {

        id:1,
        firstname:"Mahmoud ",
        lastname:"Saad ",
        email:"mahmoud33saad@gmail.com",
        role:Role.EMPLOYER

      }
    ]  
  }
 


  getUsers(){
    return this.dataSource;
   }
   getUserById(id:number){
  return  this.dataSource.find(obj => obj.id == id)
   }

addUser(value:any){
  value.id= this.dataSource.length + 1;
  this.dataSource.push(value);
}

editUser(value:any){
  var foundIndex = this.dataSource.findIndex(x => x.id == value.id);
  this.dataSource[foundIndex] =value;

  
 
 return   this.dataSource[foundIndex] =value;

      }
   deleteUser(index:number){
    this.dataSource = this.dataSource.filter(t => {

      return t.id !== index;
     });
   }
}
