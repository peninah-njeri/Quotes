import { Quote } from './../../models/quote';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes: Quote[]
  constructor() { }

  ngOnInit() {
  }

  upvote(quote:Quote){
    quote.upvotes ++;
  }
  downvote(quote:Quote){
    quote.downvotes ++;
  }
  delete(quote:Quote){
    const index = this.quotes.findIndex(myQuote => {
      return myQuote.body === quote.body;
    })
 

    this.quotes.splice(index,1);
  }

}
