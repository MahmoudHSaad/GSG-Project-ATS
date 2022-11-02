import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropDown } from 'src/app/models/drop-down.model';

@Component({
  selector: 'app-multi-drop-down',
  templateUrl: './multi-drop-down.component.html',
  styleUrls: ['./multi-drop-down.component.css']
})
export class MultiDropDownComponent implements OnInit {
  @Input() items:DropDown[]=[]; 
  @Output() itemChangeEmitter2:EventEmitter<DropDown> = new EventEmitter<DropDown>()
  toppings = new FormControl('');
  multiSelected:any=[]
  constructor() { }

  ngOnInit(): void {
  }

  onItemChange (event:any){
console.log(event.value, "muuuuu");
let selectedItems = event.value

// for(let i =0 ,i <= event.value.lenght ,i++){

//   let item = this.items.find(item=>item.id == i)
//   this.itemChangeEmitter2.emit(item);
//   console.log(id, item  , "dropDownEmit");
// }
this.multiSelected =[]
for (const i of event.value) {
  console.log(i ,"event.valueevent.valueevent.value");
  let item:any = this.items.find(item=>item.id == i)
  console.log(item ,"event.valueevent.valueevent.value");
  this.multiSelected.push(item)
  
}
console.log(  this.multiSelected ,"  this.multiSelected");

this.itemChangeEmitter2.emit(this.multiSelected );
    
      }

}
