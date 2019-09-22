import { Quote } from './../../models/quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()quote:Quote;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.quote)
  }
  upvote(quote:Quote){
    quote.upvotes ++;
  }
  downvote(quote:Quote){
    quote.downvotes ++;
  }
  deleteQuote(quote){
    this.delete.emit(quote)
  }

}
