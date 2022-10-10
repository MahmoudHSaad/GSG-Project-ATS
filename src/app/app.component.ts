import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropDownService } from './shared/services/drop-down.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'ATS';
  subscriptions:Subscription[]=[]
  constructor(private DropDownService : DropDownService){

  }


  ngOnInit(){
  var sub=  this.DropDownService.getAll().subscribe(
      res=>{
        console.log(res);
        this.DropDownService.setDropdownsInLocalStorage(res);
    })
    this.subscriptions.push(sub);

    console.log(this.DropDownService.getCountries() , "countries");
    console.log(this.DropDownService.getCities() , "cities");
    console.log(this.DropDownService.getUniversities() , "getUniversities");
    

  }
  
  ngOnDestroy(){
    this.subscriptions.forEach(sub=>{
      sub.unsubscribe();
    })

  }
}
