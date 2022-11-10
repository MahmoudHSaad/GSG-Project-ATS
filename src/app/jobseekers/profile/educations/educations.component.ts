import { Component, OnInit } from '@angular/core';
import { DropDown } from 'src/app/models/drop-down.model';
import { Education } from 'src/app/shared/models/education.modal';
import { DropDownService } from 'src/app/shared/services/drop-down.service';
import { EducationsService } from './educations.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  dataSourceCopy:any=[];
  Majors:DropDown[]=[]
  Major:any
  AllDataMajor:DropDown[]=[]
  Countries:DropDown[]=[]
  Country:any
  AllCountries:DropDown[]=[]
  AllCities:any=[]
  Univrsities:any=[]


  formApper:boolean=false
  constructor(private educationServeice : EducationsService ,private DropDownService:DropDownService) {
    
   }


  ngOnInit(): void {
    this.getAllEducations();
    this.dataFormating()

  }
  getAllEducations(){
    this.dataSourceCopy =this.educationServeice.getEducations() 
    }
  deleteItem(x:number){
    this.dataSourceCopy= this.educationServeice.deleteEducation(x);
    this.getAllEducations() 
  }
dataFormating(){
  this.Majors= this.DropDownService.getMajors();
  this.Countries= this.DropDownService.getCountries();
  for (const data of this.dataSourceCopy) {
    this.Major = this.Majors.find(x=>{
   return x.id == data.majorId;
  })
    this.Country = this.Countries.find(x=>{ 
   return x.id == data.countryId;
  })
     this.AllDataMajor.push(this.Major)
     this.AllCountries.push(this.Country)
  }
  for (const citydata of this.dataSourceCopy) {      
     let city=  this.DropDownService.getCities(citydata.countryId) ; 
  for (let index = 0; index < city.length; index++) {
    if(citydata.cityId ==  city[index].id){
     this.AllCities.push(city[index])
    }
  }
  } 
  for (const universitydata of this.dataSourceCopy) {      
     let university=  this.DropDownService.getUniversities(universitydata.cityId) ; 
  for (let index = 0; index < university.length; index++) {
    if(universitydata.universityId ==  university[index].id){
     this.Univrsities.push(university[index])
    } }
    } 
}

  showForm():void{
  this.formApper = !this.formApper
   }
   

   new(event:any){
    this.educationServeice.addEducation(event);
    console.log(event ,"eventeventeventevent");
    
 
    this.dataSourceCopy =this.educationServeice.getEducations() 
    
    this.dataFormating()
   }
}
