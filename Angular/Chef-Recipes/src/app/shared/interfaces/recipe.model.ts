import { from } from 'rxjs';
import { IIngredient } from './ingredient.model'


export interface IRecipe{
    id:number,
    title:string,
    userUserName: string,
    userId:string,
    imageURL:string,
    description: string,
    ingredients: IIngredient[],
}