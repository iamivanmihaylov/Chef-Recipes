import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  form:FormGroup;

  defaultImage:string = "../../../assets/images/no-image.png";
  imageURL:string = this.defaultImage ;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      description:[ '',[],[] ],
      imageURL: ['',[],[]],
      ingredients:this.fb.array(
        [this.fb.group({
          ingredientName:['',[],[]],
          amount:['',[],[]],
          type:['Tbsp',[],[]]
        })]
      )
    })
  }

  get ingredients(){
     let a = this.form.get('ingredients') as FormArray;
     return a;
  }

  submitHandler(){
    
  }

  ngOnInit(): void {
  }
  
  addIngredient(){
    this.ingredients.push(this.fb.group({
      ingredientName:['',[],[]],
      amount:['',[],[]],
      type:['Tbsp',[],[]]
    }))
  }

  removeIngredient(index:number){
    this.ingredients.removeAt(index);
  }

  changePhoto(imageURL:HTMLInputElement){
    if(imageURL.value.trim() === ""){
      this.imageURL = this.defaultImage
      return
    }
    this.imageURL= imageURL.value;
    
  }

}
