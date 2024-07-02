import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() count!: any
constructor()
  {
    console.log("constructor called")
  }
ngOnChanges()
{
  console.log("on change is called")
}
ngOnInit()
{
  console.log("onInIt called")
}
ngDoCheck()
{
  console.log("do check called")
}
ngAfterContentInit()
{
  console.log("after the content DOM initiated but only once")
}
ngAfterContentChecked()
{
  console.log("everytime check happens in contentDOM")
}
ngAfterViewInit()
{
  console.log("after the view DOM initiated but only once")
}
ngAfterViewChecked()
{
  console.log("everytime happends in viewDOM")
}
ngOnDestory()
{
  console.log("called when going out of ")
}
}
