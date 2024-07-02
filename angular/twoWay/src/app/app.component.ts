import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name!: string;
  em!: string;
  pass!: string;
  show()
  {
   
    alert(`successfully submitted \n Name:-${this.name} \n Email:-${this.em} \nPassword:- ${this.pass}`)
  }
}