import { Component} from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})

export class AppComponent {
  title = 'angular';
  User:string="";
  leng:number=0;
  arrayData=[""];
  isChecked:number=0;
  
  addNote()
  {
    if(this.User=="")
    {alert("input Field Empty !!!");}
    else
    {
      this.arrayData.push(this.User);
      this.User="";
      this.leng = this.arrayData.length;
    }
  }
  deleteTodo(indexArray:number)
  {
    this.arrayData.splice(indexArray,1)
  }
  checked()
  {
    this.isChecked=1;
  }
  myDate:any = new Date();
  constructor(private datePipe: DatePipe){
   this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');   
  }
}
