import { Component } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quotes: Quote[] = [];


  submitForm(value){
    const quote = new Quote(value.quote, value.author, value.publisher)
    this.quotes.push(quote);
    console.log(value)
  }

}
