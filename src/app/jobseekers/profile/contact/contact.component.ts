import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Contact } from 'src/app/shared/models/contact.modal';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup
@Output() saveEmitter:EventEmitter<Contact> = new EventEmitter<Contact>()
 
  constructor() { 

    this.contactForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      mobile: new FormControl(''),
      fax: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  save(){
    this.saveEmitter.emit(this.contactForm.value);
    console.log(this.contactForm.value , "this.adressForm.value");
  }

}
