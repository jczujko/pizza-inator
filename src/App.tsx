import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import FilteredPizzaMenu from './components/filtered-pizza-menu/filtered-pizza-menu'
import JsonUploader from './components/json-uploader/json-uploader'
import { type PizzaListContext, type FilteredPizza, type Pizza, type PizzaMenu, type PizzaMenuFiltered } from './utils/types'

export const MenuContext = createContext<PizzaListContext | null>(null)

const App: React.FC = (): JSX.Element => {
  const [filteredMenu, setFilteredMenu] = useState<PizzaMenuFiltered | undefined>(undefined)
  const [pizzas, setPizzas] = useState<FilteredPizza[] | undefined>(undefined)

  useEffect((): void => {
    if (filteredMenu === undefined) {
      setPizzas(undefined)
    } else {
      setPizzas(filteredMenu.pizzas)
    }
  }, [filteredMenu])

  const onJsonSave = (menu: PizzaMenu): void => {
    setFilteredMenu({
      ...menu,
      pizzas: menu.pizzas.map((pizza: Pizza): FilteredPizza => {
        return { ...pizza, isHidden: false }
      })
    })
  }

  const togglePizzaVisibility = (index: number): void => {
    if (pizzas === undefined) return
    const pizzasToChange = [...pizzas]
    pizzasToChange[index].isHidden = !pizzasToChange[index].isHidden
    setPizzas(pizzasToChange)
  }

  return (
    <div className="pizza-inator">
      <div className='pizza-inator__header' >
        <h1>Pizza-inator</h1>
        <h2>pineaple and olives on pizza inator</h2>
      </div>
      <div className='pizza-inator__content'>
        {(filteredMenu === undefined) &&
        <JsonUploader onSave={onJsonSave} />}
        {(filteredMenu !== undefined && pizzas !== undefined) &&
        <MenuContext.Provider value={{
          priceTag: filteredMenu.priceTag,
          sizes: filteredMenu.sizes,
          togglePizzaVisibility,
          pizzas

        }}>
          <FilteredPizzaMenu />
        </MenuContext.Provider>
        }
      </div>
    </div>
  )
}

export default App
