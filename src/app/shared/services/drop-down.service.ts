import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropDownParent } from 'src/app/models/drop-down-parent.model';
import { DropDown } from 'src/app/models/drop-down.model';

@Injectable({
  providedIn: 'root'
})
export class DropDownService {
  dropDownKey:string= "dropdowns"

  constructor() { }

  getAll():Observable<any>{
    let dropdowns:any={ }
    
    dropdowns['countries'] = [
      {id:1 , name:"Palestine"},
      {id:2 , name:"Egypt"},
      {id:3 , name:"UK"},
      {id:4 , name:"USA"},
    ];
    dropdowns['cities'] = [
      {id:1 , name:"Gaza" , parentId:1},
      {id:2 , name:"London" ,parentId:3},
      {id:3 , name:"Washonton" ,parentId:4},
      {id:4 , name:"Cairo" ,parentId:2},
    ];
    dropdowns['sectors'] = [
      {id:1 , name:"Management" },
      {id:2 , name:"IT" },
      {id:3 , name:"Finance" },
      {id:4 , name:"Technical Support" },
    ];
    dropdowns['functionalAreas'] = [
      {id:1 , name:"Markiting" },
      {id:2 , name:"Health Care" },
    ];
    dropdowns['languages'] = [
      {id:1 , name:"Arabic" },
      {id:2 , name:" English" },
    ];
    dropdowns['benefits'] = [
      {id:1 , name:"Work From Home" },
      {id:2 , name:"Flexible Hours" },
    ];
    dropdowns['jobTypes'] = [
      {id:1 , name:"jobType 1" },
      {id:2 , name:"jobType 2" },
    ];
    dropdowns['nationalities'] = [
      {id:1 , name:"palestinian" },
      {id:2 , name:"Egyptian" },
    ];
    dropdowns['educationLevels'] = [
      {id:1 , name:"Primary Education" },
      {id:2 , name:"Bachelor's or equivalent level" },
      {id:3 , name:"Master's or equivalent level" },
    ];
    dropdowns['skills'] = [
      {id:1 , name:"skills 1" },
      {id:2 , name:"skills 2" },
    ];
  
    dropdowns['languagesSkillsLevel'] = [
      {id:1 , name:"beginner" },
      {id:2 , name:"intermediate" },
      {id:3 , name:"advanced" },
    ];
    dropdowns['status'] = [
      {id:1 , name:"status 1" },
      {id:2 , name:"status 2" },
    ];
    dropdowns['majors'] = [
      {id:1 , name:"majors 1" },
      {id:2 , name:"majors 2" },
    ];
    dropdowns['universities'] = [
      {id:1 , name:"AUG", parentId:1 },
      {id:2 , name:"IUG", parentId:1 },
      {id:3 , name:"The University of Jordan", parentId:2 },
     
    ];
    return of(dropdowns)
  }
  
  setDropdownsInLocalStorage(dropdowns:any):void{
    localStorage.setItem(this.dropDownKey,JSON.stringify(dropdowns))
  }
  getDropdownsInLocalStorage():any{
    let dropDownData:any
    dropDownData = localStorage.getItem(this.dropDownKey); 
    return JSON.parse(dropDownData) ; 
  }

  getCountries():DropDown[]{
    let  countries ; 
    countries =  this.getDropdownsInLocalStorage().countries ; 
    return countries;
  }
  getCities(countryId:number):DropDownParent[]{

   return this.getDropdownsInLocalStorage().cities.filter((id:any)=>{
     return  id.parentId == countryId
    }) ; 
   
  }
  getSectors():DropDown[]{
    let  sectors ; 
    sectors =  this.getDropdownsInLocalStorage().sectors ; 
    return sectors;
  }
  getFunctionalAreas():DropDown[]{
    let  functionalAreas ; 
    functionalAreas =  this.getDropdownsInLocalStorage().functionalAreas ; 
    return functionalAreas;
  }
  getLanguages():DropDown[]{
    let  languages ; 
    languages =  this.getDropdownsInLocalStorage().languages ; 
    return languages;
  }
  getBenefits():DropDown[]{
    let  benefits ; 
    benefits =  this.getDropdownsInLocalStorage().benefits ; 
    return benefits;
  } 
  getJobTypes():DropDown[]{
    let  jobTypes ; 
    jobTypes =  this.getDropdownsInLocalStorage().jobTypes ; 
    return jobTypes;
  } 
  getNationalities():DropDown[]{
    let  nationalities ; 
    nationalities =  this.getDropdownsInLocalStorage().nationalities ; 
    return nationalities;
  } 
  getEducationLevels():DropDown[]{
    let  educationLevels ; 
    educationLevels =  this.getDropdownsInLocalStorage().educationLevels ; 
    return educationLevels;
  } 
  getSkills():DropDown[]{
    let  skills ; 
    skills =  this.getDropdownsInLocalStorage().skills ; 
    return skills;
  } 
  getLanguagesSkillsLevel():DropDown[]{
    let  languagesSkillsLevel ; 
    languagesSkillsLevel =  this.getDropdownsInLocalStorage().languagesSkillsLevel ; 
    return languagesSkillsLevel;
  } 
  getStatus():DropDown[]{
    let  status ; 
    status =  this.getDropdownsInLocalStorage().status ; 
    return status;
  } 
  getMajors():DropDown[]{
    let  majors ; 
    majors =  this.getDropdownsInLocalStorage().majors ; 
    return majors;
  } 
  getUniversities(cityId:number):DropDownParent[]{
     
  return this.getDropdownsInLocalStorage().universities.filter((id:any)=>{
    return  id.parentId == cityId
   }) 
}
}
