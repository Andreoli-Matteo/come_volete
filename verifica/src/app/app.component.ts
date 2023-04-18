import { Component } from '@angular/core';
import { Numbers } from './Models/numbers.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verifica';

  numero1 :Numbers =new Numbers(0,0);


  somma(num: HTMLInputElement){
    this.numero1.tot += Number(num.value);
    this.numero1.n_click += 1;

  }


  sottrazione(num:HTMLInputElement){
    this.numero1.tot -= Number(num.value);
    this.numero1.n_click += 1;
    
  }
}
