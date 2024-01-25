import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBinding';
  // imageURL='../assets/images/prec.jfif'
  // off=false;
  // isError=true
  submit(){
    console.log('Button submit')
  }
}