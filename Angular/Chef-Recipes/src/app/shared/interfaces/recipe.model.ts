import { from } from 'rxjs';
import { IIngredient } from './Ingredient.model'


export interface IRecipe{
    username: string,
    description: string,
    isLiked: boolean,
    ingredients: IIngredient[],
}