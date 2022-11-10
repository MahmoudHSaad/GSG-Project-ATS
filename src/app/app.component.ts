import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DropDown } from './models/drop-down.model';
import { DropDownService } from './shared/services/drop-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'ATS';
  subscriptions:Subscription[]=[]
  items:DropDown[]=[
    {id:1, name:"saad1" },
    {id:2, name:"saad2" },
    {id:3, name:"saad3" },
  ]
  items2:DropDown[]=[]
  items4:DropDown[]=[]
  serlectedItem:any= null;
  serlectedItem2:any= null;


  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private DropDownService : DropDownService){

  }

  toppings = new FormControl('');
  ngOnInit(){
  var sub=  this.DropDownService.getAll().subscribe(
      res=>{
      
        this.DropDownService.setDropdownsInLocalStorage(res);
    })
    this.subscriptions.push(sub);

    this.items2= this.DropDownService.getCountries()

 

  }
  onItemChange(item:DropDown){
    this.serlectedItem = item
    this.items4= this.DropDownService.getCities(item.id)
 
  }
  onItemChange2(item:DropDown){
    this.serlectedItem2 = item
    this.items4=this.DropDownService.getCities(item.id)
  }
  onItemChange3(item:DropDown){
  
  
  }
  
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>{
      sub.unsubscribe();
    })

  }
}
