import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  }

  get ingredients(){
     let a = this.form.get('ingredients') as FormArray;
     return a;
  }

  submitHandler(){
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      description:[ '',[Validators.required],[] ],
      imageURL: ['',[Validators.required],[]],
      ingredients:this.fb.array(
        [this.fb.group({
          ingredientName:['',[Validators.required],[]],
          amount:['',[Validators.required],[]],
          type:['Tbsp',[Validators.required],[]]
        })],[Validators.required]
      )
    })
  }
  
  addIngredient(){
    this.ingredients.push(this.fb.group({
      ingredientName:['',[Validators.required],[]],
      amount:['',[Validators.required],[]],
      type:['Tbsp',[Validators.required],[]]
    },[Validators.required]))
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
