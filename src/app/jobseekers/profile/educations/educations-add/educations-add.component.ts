import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDown } from 'src/app/models/drop-down.model';
import { Education } from 'src/app/shared/models/education.modal';
import { DropDownService } from 'src/app/shared/services/drop-down.service';
import { EducationsService } from '../educations.service';

@Component({
  selector: 'app-educations-add',
  templateUrl: './educations-add.component.html',
  styleUrls: ['./educations-add.component.css']
})
export class EducationsAddComponent implements OnInit {
  Major:DropDown[]=[]
  Country:DropDown[]=[]
  City:DropDown[]=[]
  University:DropDown[]=[]
  Status:DropDown[]=[]
  EducForm:FormGroup;

  stats:boolean=false;
  
  @Output() saveEmitter:EventEmitter<Education> = new EventEmitter<Education>()
  constructor(private DropDownService:DropDownService , private EducationsService:EducationsService) { 

    this.EducForm = new FormGroup({
      id: new FormControl(""),
      majorId: new FormControl(""),
      countryId: new FormControl(""),
      cityId: new FormControl(""),
      universityId: new FormControl(""),
      startDate: new FormControl(Date),
      endDate: new FormControl(Date),
      presentStatus: new FormControl(""),
 
    });

  }

  ngOnInit(): void {
    this.Major = this.DropDownService.getMajors();
    this.Country = this.DropDownService.getCountries();
    this.Status = this.DropDownService.getStatus();
  }
  onMajorChange(item:DropDown){
    this.EducForm.controls['majorId'].setValue(item.id)
  }
  onCountryChange(item:DropDown){
    this.EducForm.controls['countryId'].setValue(item.id)
      this.City = this.DropDownService.getCities(item.id);
  }
  onCityChange(item:DropDown){
    this.EducForm.controls['cityId'].setValue(item.id)
    this.University= this.DropDownService.getUniversities(item.id)
    }
  onUniversityChange(item:DropDown){
    this.EducForm.controls['universityId'].setValue(item.id)
  }
  onStatusChange(item:DropDown){
    this.EducForm.controls['presentStatus'].setValue(item.name)
  }
  save(){
    this.saveEmitter.emit(this.EducForm.value);
    this.EducForm.reset();
  }

 

}
