import { Injectable } from '@angular/core';
import { Education } from 'src/app/shared/models/education.modal';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  dataSource:Array<Education> =[];  
  constructor() {
    this.dataSource =[
      {

        id:1,
        majorId:1,
        countryId:1,
        cityId:1,
        universityId:1,
        startDate: new Date('1/1/2001'),
        endDate: new Date('1/1/2004') ,
        presentStatus:"No",
       
      },
      {

        id:2,
        majorId:1,
        countryId:1,
        cityId:1,
        universityId:2,
        startDate: new Date('1/1/2001'),
        endDate: new Date('1/1/2004') ,
        presentStatus:"No",
       
      },
      {

        id:3,
        majorId:1,
        countryId:3,
        cityId:2,
        universityId:3,
        startDate: new Date('1/1/2001'),
        endDate: new Date('1/1/2004') ,
        presentStatus:"No",
       
      },
      {

        id:4,
        majorId:2,
        countryId:2,
        cityId:4,
        universityId:4,
        startDate: new Date('1/1/2001'),
        endDate: new Date('1/1/2004') ,
        presentStatus:"No",
       
      },
    ]  
   }
  
  getEducations(){
    return this.dataSource;
   }
   getEducationById(id:number){
  return  this.dataSource.find(obj => obj.id == id)
   }

addEducation(value:any){
  value.id= this.dataSource.length + 1;
  this.dataSource.push(value);
}

editEducationr(value:any){
  var foundIndex = this.dataSource.findIndex(x => x.id == value.id);
  this.dataSource[foundIndex] =value;

  
 
 return   this.dataSource[foundIndex] =value;

      }
   deleteEducation(index:number){
    this.dataSource = this.dataSource.filter(t => {

      return t.id !== index;
     });
   }
}
