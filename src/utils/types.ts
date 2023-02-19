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

export interface PizzaListContext extends PizzaMenuFiltered {
  togglePizzaVisibility: (index: number) => void
}
