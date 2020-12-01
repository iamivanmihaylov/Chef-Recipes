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

  defaultImage:string = "../../../assets/images/no-image.png";
  imageURL:string = this.defaultImage ;

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

  changePhoto(imageURL:HTMLInputElement){
    if(imageURL.value.trim() === ""){
      this.imageURL = this.defaultImage
      return
    }
    this.imageURL= imageURL.value;
    
  }

  removeRecipe(i:number){
    this.recipes.splice(i,1)
  }

}
