import React, { useContext } from 'react'
import { MenuContext } from '../../App'
import { getUniqueIngredientsFromPizzaList } from '../../helpers/ingredients'
import { type PizzaListContext } from '../../utils/types'
import FilteredPizzaList from './components/filtered-pizza-list/filtered-pizza-list'

const FilteredPizzaMenu: React.FC = (): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)
  const uniqueIngredients = getUniqueIngredientsFromPizzaList(filteredPizzaList.pizzas)

  return (<div className='filtered-pizza-menu'>
    <MenuContext.Provider value={filteredPizzaList}>
      <FilteredPizzaList pizzasToFilter={filteredPizzaList.pizzas} priceTag={filteredPizzaList.priceTag}/>
    </MenuContext.Provider>

  </div>)
}

export default FilteredPizzaMenu
