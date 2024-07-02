import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  st!:string
  search()
  {
    fetch("http://www.omdbapi.com/?s=&{this.}"&)
  }
}
