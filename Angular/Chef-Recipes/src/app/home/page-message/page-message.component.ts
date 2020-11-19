import { Component, OnInit } from '@angular/core';
import { IChefQuote } from '../shared/chef-quotes.model';
import { ChefQuotesService } from '../shared/chef-quotes.service'

@Component({
  selector: 'app-page-message',
  templateUrl: './page-message.component.html',
  styleUrls: ['./page-message.component.css'],
  
})
export class PageMessageComponent implements OnInit {

  chefQuote = { text: "",author:""};

  constructor(public chefService:ChefQuotesService) {

  }

  ngOnInit(): void {
    this.chefQuote = this.chefService.getChefQuote();
  }

}
