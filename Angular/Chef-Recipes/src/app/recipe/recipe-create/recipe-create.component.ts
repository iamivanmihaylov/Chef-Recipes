import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  recipes:any[] = [{
    id: 1,
    ingredientName: '',
    amount:0,
  }]

  constructor() { }

  ngOnInit(): void {
  }

  addRecipe(){
    this.recipes.push({
      id:this.recipes.length + 1,
      ingredientName: '',
      amount: 0
    })
  }

  removeRecipe(i:number){
    this.recipes.splice(i,1)
  }

}
