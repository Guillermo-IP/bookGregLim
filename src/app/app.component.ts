import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'miProyecto; empezamos...';
  imageURL = "../assets/f40.jpeg";
  isValid = true;
  onClick($event:any){
    console.log("Botón clickado", $event)
  }
}
