import React, { useContext } from 'react'
import { MenuContext } from '../../App'
import { type PizzaListContext } from '../../utils/types'
import FilteredPizzaList from './components/filtered-pizza-list/filtered-pizza-list'
import PizzaFilter from './components/pizza-filter/pizza-filter'
import './style.css'

const FilteredPizzaMenu: React.FC = (): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)

  return (
    <div className='filtered-pizza-menu'>
      <MenuContext.Provider value={filteredPizzaList}>
        <FilteredPizzaList />
        <PizzaFilter />
      </MenuContext.Provider>

    </div>
  )
}

export default FilteredPizzaMenu
