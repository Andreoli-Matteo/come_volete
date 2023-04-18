import { Component,Input } from '@angular/core';
import { Numbers } from '../Models/numbers.models';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent {
@Input() numero2:Numbers = new Numbers(0,0);
super_color : boolean =false
super() {
   this.super_color=true
}
}
