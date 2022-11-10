import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDown } from 'src/app/models/drop-down.model';
import { Education } from 'src/app/shared/models/education.modal';
import { Experience } from 'src/app/shared/models/experience.modal';
import { DropDownService } from 'src/app/shared/services/drop-down.service';

@Component({
  selector: 'app-experiances-add',
  templateUrl: './experiances-add.component.html',
  styleUrls: ['./experiances-add.component.css']
})
export class ExperiancesAddComponent implements OnInit {
  ExperForm:FormGroup;
  Country:DropDown[]=[]
  City:DropDown[]=[]
  University:DropDown[]=[]
  Status:DropDown[]=[]
  @Output() saveEmitter:EventEmitter<Experience> = new EventEmitter<Experience>()
  constructor( private DropDownService:DropDownService) { 
    this.ExperForm = new FormGroup({
      id: new FormControl(""),
      position: new FormControl(""),
      company: new FormControl(""),
      countryId: new FormControl(""),
      cityId: new FormControl(""),
      startDate: new FormControl(Date),
      endDate: new FormControl(Date),
      presentStatus: new FormControl(""),
      salary: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.Country = this.DropDownService.getCountries();
    this.Status = this.DropDownService.getStatus();
  }

  onCountryChange(item:DropDown){
    this.ExperForm.controls['countryId'].setValue(item.id)
      this.City = this.DropDownService.getCities(item.id);
  }
  onCityChange(item:DropDown){
    this.ExperForm.controls['cityId'].setValue(item.id)
    this.University= this.DropDownService.getUniversities(item.id)
    }
  onStatusChange(item:DropDown){
    this.ExperForm.controls['presentStatus'].setValue(item.name)
  }

  save(){
    this.saveEmitter.emit(this.ExperForm.value);
    this.ExperForm.reset();
  }

}
