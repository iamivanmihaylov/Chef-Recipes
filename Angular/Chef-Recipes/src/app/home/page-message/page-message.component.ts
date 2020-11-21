import { Component, OnDestroy, OnInit } from '@angular/core';
import { IChefQuote } from '../../shared/interfaces/chef-quotes.model';
import { ChefQuotesService } from '../../shared/services/chef-quotes.service'
import { interval, Subscription } from "rxjs";

@Component({
  selector: 'app-page-message',
  templateUrl: './page-message.component.html',
  styleUrls: ['./page-message.component.css'],
  
})
export class PageMessageComponent implements OnInit,OnDestroy {

  chefQuote = { text: "",author:""};
  intervalObservable:Subscription | null = null;

  constructor(public chefService:ChefQuotesService) {

  }

  ngOnInit(): void {
    this.chefQuote = this.chefService.getChefQuote();
    this.intervalObservable = interval(20000).subscribe(() => {
      this.chefQuote = this.chefService.getChefQuote();
    })
  }

  ngOnDestroy() : void{
    this.intervalObservable?.unsubscribe();
  }

}
