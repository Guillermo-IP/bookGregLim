import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  icono1 = 'star_border'
  color1 = 'basic'
  icono2 = 'star_border'
  color2 = 'basic'
  icono3 = 'star_border'
  color3 = 'basic'
  icono4 = 'star_border'
  color4 = 'basic'
  icono5 = 'star_border'
  color5 = 'basic'
  rating = 0
  onClick(ratingVal:number){
    this.rating = ratingVal
    if (this.rating >= 1){
      this.icono1 = 'star_rate'
      this.color1 = 'accent'
    }
    else{
      this.icono1 = 'star_border'
      this.color1 = 'basic'      
    }
    
    if (this.rating >= 2){
      this.icono2 = 'star_rate'
      this.color2 = 'accent'
    }    
    else{
      this.icono2 = 'star_border'
      this.color2 = 'basic'      
    }

    if (this.rating >= 3){
      this.icono3 = 'star_rate'
      this.color3 = 'accent'
    }  
    else{
      this.icono3 = 'star_border'
      this.color3 = 'basic'      
    }  
    if (this.rating >= 4){
      this.icono4 = 'star_rate'
      this.color4 = 'accent'
    }    
    else{
      this.icono4 = 'star_border'
      this.color4 = 'basic'      
    }
    if (this.rating == 5){
      this.icono5 = 'star_rate'
      this.color5 = 'accent'
    }    
    else{
      this.icono5 = 'star_border'
      this.color5 = 'basic'      
    }
  }
}
