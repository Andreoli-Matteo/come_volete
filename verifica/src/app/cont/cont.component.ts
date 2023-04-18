import { Component,Input } from '@angular/core';
import {Numbers} from '../Models/numbers.models' 
@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent {
 
 
  @Input() numero: Numbers=new Numbers(0,0)
 vett_n:Numbers []=[];

 addToFavorite(){
  this.vett_n.push(new Numbers(this.numero.tot,this.numero.n_click))
 }
}
