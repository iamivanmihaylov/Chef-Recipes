import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe;

  isLiked = false

  likeHandler(){
    this.isLiked = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
