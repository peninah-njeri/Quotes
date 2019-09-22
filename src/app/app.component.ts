import { Component } from '@angular/core';
import { Quote } from './models/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quotes: Quote[] = [
    new Quote("The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.","Mark Twain", "Abram"),
    new Quote("To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.","Buddha", "James"),
    new Quote("Those who do not find time for exercise will have to find time for illness.","Edward Smith-Stanley", "Pete")
  ];


  submitForm(value){
    const quote = new Quote(value.quote, value.author, value.publisher)
    this.quotes.push(quote);
    console.log(quote)
  }

}
