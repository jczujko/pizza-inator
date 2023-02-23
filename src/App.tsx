import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import FilteredPizzaMenu from './components/filtered-pizza-menu/filtered-pizza-menu'
import JsonUploader from './components/json-uploader/json-uploader'
import { getUniqueIngredientsFromPizzaList } from './helpers/ingredients'
import { type PizzaListContext, type FilteredPizza, type Pizza, type PizzaMenu, type PizzaMenuFiltered, type IngredientContainer } from './utils/types'

export const MenuContext = createContext<PizzaListContext | null>(null)

const App: React.FC = (): JSX.Element => {
  const [filteredMenu, setFilteredMenu] = useState<PizzaMenuFiltered | undefined>(undefined)
  const [pizzas, setPizzas] = useState<FilteredPizza[] | undefined>(undefined)
  const [ingredients, setIngredients] = useState<string[]>([])
  const [blacklist, setBlacklist] = useState<string[]>([])
  const [whitelist, setWhitelist] = useState<string[]>([])

  useEffect((): void => {
    if (filteredMenu === undefined) {
      setPizzas(undefined)
    } else {
      setPizzas(filteredMenu.pizzas)
      setIngredients(getUniqueIngredientsFromPizzaList(filteredMenu.pizzas))
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

  const moveIngredient = (ingredient: string, from: IngredientContainer, to: IngredientContainer): void => {
    let newFrom, index
    switch (from) {
      case 'ingredients':
        index = ingredients.findIndex(value => value === ingredient)
        newFrom = [...ingredients]
        newFrom.splice(index, 1)
        setIngredients(newFrom)
        break
      case 'blacklist':
        index = blacklist.findIndex(value => value === ingredient)
        newFrom = [...blacklist]
        newFrom.splice(index, 1)
        setBlacklist(newFrom)
        break
      case 'whitelist':
        index = whitelist.findIndex(value => value === ingredient)
        newFrom = [...whitelist]
        newFrom.splice(index, 1)
        setWhitelist(newFrom)
        break
    }
    switch (to) {
      case 'ingredients':
        setIngredients([...ingredients, ingredient])
        break
      case 'blacklist':
        setBlacklist([...blacklist, ingredient])
        break
      case 'whitelist':
        setWhitelist([...blacklist, ingredient])
        break
    }
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
          ingredients,
          blacklist,
          whitelist,
          togglePizzaVisibility,
          pizzas,
          moveIngredient
        }}>
          <FilteredPizzaMenu />
        </MenuContext.Provider>
        }
      </div>
    </div>
  )
}

export default App
