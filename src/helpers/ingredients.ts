import { type Pizza } from '../utils/types'

export const getUniqueIngredientsFromPizzaList = (pizzaList: Pizza[]): string[] => {
  const ingredients = pizzaList.map((pizza: Pizza) => pizza.ingredients).flat()
  const normalizedIngredients = ingredients.map((ingredient: string) => ingredient.trim().toLowerCase())
  const uniqueIngredients = new Set<string>(normalizedIngredients)
  return Array.from(uniqueIngredients)
}
