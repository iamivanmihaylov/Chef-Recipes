import { from } from 'rxjs';
import { IIngredient } from './ingredient.model'


export interface IRecipe{
    title:string,
    userUserName: string,
    imageURL:string,
    description: string,
    ingredients: IIngredient[],
}