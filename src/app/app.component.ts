import { Component } from '@angular/core';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpComponent } from './emp/emp.component';

@Component({
  selector: 'app-root',
  imports: [TextcomponentComponent, ImagecomponentComponent, EmpComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
}
