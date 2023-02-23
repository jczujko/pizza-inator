export interface Pizza {
  name: string
  ingredients: string[]
  prices: number[]
}

export interface PizzaMenu {
  sizes: string[]
  priceTag: string
  pizzas: Pizza[]
}

export interface FilteredPizza extends Pizza {
  isHidden: boolean
}

export interface PizzaMenuFiltered extends Pick<PizzaMenu, 'sizes' | 'priceTag'> {
  pizzas: FilteredPizza[]
}

export type IngredientContainer =
  'ingredients' | 'blacklist' | 'whitelist'

export interface PizzaListContext extends PizzaMenuFiltered {
  ingredients: string[]
  blacklist: string[]
  whitelist: string[]
  moveIngredient: (ingredient: string, from: IngredientContainer, to: IngredientContainer) => void
  togglePizzaVisibility: (index: number) => void
}
