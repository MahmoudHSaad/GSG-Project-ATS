import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 
 
import { DropDown } from 'src/app/models/drop-down.model';
import { Address } from 'src/app/shared/models/address.modal';
import { DropDownService } from 'src/app/shared/services/drop-down.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  adressForm:FormGroup;
 
  Country:DropDown[]=[]
  City:DropDown[]=[]
  University:DropDown[]=[]
  @Output() saveEmitter:EventEmitter<Address> = new EventEmitter<Address>()
  constructor(private DropDownService :DropDownService) { 
    this.adressForm = new FormGroup({
      title: new FormControl(""),
      countryId: new FormControl(""),
      cityId: new FormControl(""),
      street: new FormControl(""),
      buildingNumber: new FormControl(""),
    });
  }

  ngOnInit(): void {
 
    this.Country = this.DropDownService.getCountries();
 
  }
 
  onCountryChange(item:DropDown){
    this.adressForm.controls['countryId'].setValue(item.id)
      this.City = this.DropDownService.getCities(item.id);
  }
  onCityChange(item:DropDown){
    this.adressForm.controls['cityId'].setValue(item.id)
    this.University= this.DropDownService.getUniversities(item.id)
    }
 
  save(){
    this.saveEmitter.emit(this.adressForm.value);
    console.log(this.adressForm.value , "this.adressForm.value");
    
    this.adressForm.reset();
  }

}
 

