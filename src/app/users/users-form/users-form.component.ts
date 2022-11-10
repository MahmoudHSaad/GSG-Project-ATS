import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DropDown } from 'src/app/models/drop-down.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  mood:string="";
  title:string="";
  userForm: FormGroup;
  rolrOptions:DropDown[]=[
    {id:1, name:"EMPLOYER" },
    {id:2, name:"JOBSEEKER" },
    {id:3, name:"INTERVIEWER" },
  ]
  userData:any;
  serlectedItem:any= null;
 
  constructor( private activatedRoute: ActivatedRoute , private UsersService:UsersService ,
    private Router :Router  ) {

    let getMood = this.activatedRoute.snapshot.params;
    this.userForm = new FormGroup({
      id: new FormControl(""),
      firstname: new FormControl("",[Validators.required]),
      lastname: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required , Validators.email]),
      role: new FormControl("",[Validators.required ]),
    });

    switch (Object.keys(getMood).length) {
      case 0:
        this.mood="add";
        this.title="Add New User Data";
        break;
      case 1:
        this.mood="edit"
        this.title="Edit User Data";
       this.userData =  this.UsersService.getUserById(getMood['id']); 
       console.log(this.userData );
       
       this.userForm.setValue( this.userData);
        break;
    }
   }

  ngOnInit(): void {
    this.userForm.value.id =  1
  }

  onItemChange(item:DropDown){
    this.serlectedItem = item; 

    this.userForm.value.role =  item.name

    
  }
  save(){
    console.log(this.mood);
    console.log(this.userForm.value);
    
    switch (this.mood) {
      case "add":
  this.UsersService.addUser(this.userForm.value);
  this.Router.navigateByUrl("/users/list")
        break;
      case "edit":
  this.UsersService.editUser(this.userForm.value);
  this.Router.navigateByUrl("/users/list")
        break;
    }
    
   }

}
