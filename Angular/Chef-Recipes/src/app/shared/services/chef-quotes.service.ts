import { Injectable } from '@angular/core';
import { IChefQuote } from '../interfaces/chef-quotes.model';
import { chefQuotes } from '../chef-quotes'

@Injectable({
  providedIn: 'root'
})
export class ChefQuotesService {

  
 
   getChefQuote():IChefQuote{
    var random = Math.floor(Math.random() * chefQuotes.length); 
    var obj:IChefQuote = chefQuotes[random];
    return obj;
  }
}
