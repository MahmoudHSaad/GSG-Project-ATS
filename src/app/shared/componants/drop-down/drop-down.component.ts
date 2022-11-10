
import { Component, EventEmitter, Input, OnChanges, OnInit ,Output} from '@angular/core';
import { DropDown } from 'src/app/models/drop-down.model';
import { DropDownService } from '../../services/drop-down.service';
declare var $:any
@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit , OnChanges {
 @Input() items:DropDown[]=[]; 
 @Input() stats:boolean=false; 

 @Output() itemChangeEmitter:EventEmitter<DropDown> = new EventEmitter<DropDown>()
  constructor( private DropDownService:DropDownService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){

   
    
  
  }
  onItemChange (event:any){

let id:number = event.target.value ; 
let item = this.items.find(item=>item.id == id)
this.itemChangeEmitter.emit(item);
 
}
}


