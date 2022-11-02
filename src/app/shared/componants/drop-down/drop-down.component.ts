
import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { DropDown } from 'src/app/models/drop-down.model';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
 @Input() items:DropDown[]=[]; 
 @Output() itemChangeEmitter:EventEmitter<DropDown> = new EventEmitter<DropDown>()
  constructor() { }

  ngOnInit(): void {
  }
  onItemChange (event:any){

let id:number = event.target.value ; 
let item = this.items.find(item=>item.id == id)
this.itemChangeEmitter.emit(item);
console.log(id, item ,this.items , "dropDownEmit");

  }

}


