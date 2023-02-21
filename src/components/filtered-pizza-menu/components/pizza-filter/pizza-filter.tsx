import React, { useContext, useEffect } from 'react'
import { MenuContext } from '../../../../App'
import { getUniqueIngredientsFromPizzaList } from '../../../../helpers/ingredients'
import { type PizzaListContext } from '../../../../utils/types'
import './style.css'
import Draggable from 'react-draggable'

const PizzaFilter: React.FC = (): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)
  const uniqueIngredients = getUniqueIngredientsFromPizzaList(filteredPizzaList.pizzas)

  const DraggableIngredient = (name: string): JSX.Element => {
    return (
      <Draggable>
        <span className='draggable-ingredient'>{name}</span>
      </Draggable>
    )
  }

  const IngredientList: React.FC<{ ingredients: string[] }> = (props: { ingredients: string[] }): JSX.Element => {
    return (
      <div className='draggable-container'>
        {props.ingredients.map((ingredient: string) => DraggableIngredient(ingredient))}
      </div>
    )
  }

  return (
    <div className='pizza-filter'>
      <div className='pizza-filter__ingredients'>
        <h3>Ingredients</h3>
        <IngredientList ingredients={uniqueIngredients} />
      </div>
      <div className='pizza-filter__blacklist'>
        <h3>Blacklist</h3>
        <div>
          <div className='draggable-container'>
          </div>
        </div>
      </div>
      <div className='pizza-filter__whitelist'>
        <h3>Whitelist</h3>
        <div>
          <div className='draggable-container'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PizzaFilter
