import { Injectable } from '@angular/core';
import { Experience } from 'src/app/shared/models/experience.modal';

@Injectable({
  providedIn: 'root'
})
export class ExperianceService {

  dataSource:Array<Experience> =[];  
  constructor() {
    this.dataSource =[
      {
    id:1,
    position:"Engineer",
    company:"Gaza Company",
    countryId:1,
    cityId:1,
    startDate: new Date('1/1/2001'),
    endDate: new Date('1/1/2004') ,
    presentStatus:"no",
    salary:200
       
      },
      {
    id:2,
    position:"Engineer",
    company:"London Company",
    countryId:3,
    cityId:2,
    startDate: new Date('1/1/2001'),
    endDate: new Date('1/1/2004') ,
    presentStatus:"no",
    salary:200
       
      },
      {
    id:3,
    position:"Engineer",
    company:"Egy Company",
    countryId:2,
    cityId:4,
    startDate: new Date('1/1/2001'),
    endDate: new Date('1/1/2004') ,
    presentStatus:"no",
    salary:200
       
      },
 
    ]  
   }
  
  getExperience(){
    return this.dataSource;
   }
   getExperienceById(id:number){
  return  this.dataSource.find(obj => obj.id == id)
   }

addExperience(value:any){
  value.id= this.dataSource.length + 1;
  this.dataSource.push(value);
}

editExperience(value:any){
  var foundIndex = this.dataSource.findIndex(x => x.id == value.id);
  this.dataSource[foundIndex] =value;

  
 
 return   this.dataSource[foundIndex] =value;

      }
   deleteExperience(index:number){
    this.dataSource = this.dataSource.filter(t => {

      return t.id !== index;
     });
   }
}
