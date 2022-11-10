import { Component, OnInit } from '@angular/core';
import { DropDown } from 'src/app/models/drop-down.model';
import { DropDownService } from 'src/app/shared/services/drop-down.service';
import { ExperianceService } from './experiance.service';

@Component({
  selector: 'app-experiances',
  templateUrl: './experiances.component.html',
  styleUrls: ['./experiances.component.css']
})
export class ExperiancesComponent implements OnInit {
  dataSourceCopy:any=[];
  
  Countries:DropDown[]=[]
  Country:any
  AllCountries:DropDown[]=[]
  AllCities:any=[]
 

  formApper:boolean=false
 
  constructor(private ExperianceService : ExperianceService ,private DropDownService:DropDownService) { }

  ngOnInit(): void {
    this.getAllExperiances();
    this.dataFormating()

  }
  getAllExperiances(){
    this.dataSourceCopy =this.ExperianceService.getExperience() ; 
    console.log(this.dataSourceCopy , "SDvbjds");
    }
  deleteItem(x:number){
    this.dataSourceCopy= this.ExperianceService.deleteExperience(x);
    this.getAllExperiances() 
  }
dataFormating(){
 
  this.Countries= this.DropDownService.getCountries();
  for (const data of this.dataSourceCopy) {
 
    this.Country = this.Countries.find(x=>{ 
   return x.id == data.countryId;
  })
   
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
 
}
  showForm():void{
    this.formApper = !this.formApper
  }

  new(event:any){
    this.ExperianceService.addExperience(event);

    this.dataSourceCopy =this.ExperianceService.getExperience() 
    
    this.dataFormating()
   }
}
