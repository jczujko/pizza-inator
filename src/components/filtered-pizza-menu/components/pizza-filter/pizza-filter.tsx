import React, { useContext, useRef } from 'react'
import { MenuContext } from '../../../../App'
import { type IngredientContainer, type PizzaListContext } from '../../../../utils/types'
import './style.css'
import Draggable, { type DraggableData, type DraggableEvent } from 'react-draggable'

const PizzaFilter: React.FC = (): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {}

  const onDragStop = (name: string) => (e: DraggableEvent, data: DraggableData): void => {
    if (data.node === null) {
      return
    }
    if (e.target === null) {
      return
    }
    data.node.style.transform = ''
    const parent = data.node.parentElement
    if (parent !== null && parent !== e.target && data.node !== e.target) {
      const from = parent.className.replace('draggable-', '')
      const to = (e.target as HTMLElement).className.replace('draggable-', '')
      filteredPizzaList.moveIngredient(name, from as IngredientContainer, to as IngredientContainer)
    }
  }

  const DraggableIngredient = (name: string, key: number): JSX.Element => {
    const nodeRef = useRef<HTMLElement | null>(null)
    return (
      <Draggable
        nodeRef={nodeRef}
        key={`ingredient-${key}`}
        onStop={onDragStop(name)}
        onStart={onDragStart}
        bounds='.pizza-filter'
        defaultClassNameDragged=''
        defaultClassName='draggable-ingredient'
        defaultClassNameDragging='draggable-ingredient--dragging'
        position={{ x: 0, y: 0 }}
      >
        <span ref={nodeRef}>{name}</span>
      </Draggable>
    )
  }

  const IngredientList: React.FC<{
    ingredients: string[]
    className: string
  }> = (props: {
    ingredients: string[]
    className: string
  }): JSX.Element => {
    return (
      <div className={props.className} >
        {props.ingredients.map((ingredient: string, index: number) => DraggableIngredient(ingredient, index))}
      </div>
    )
  }

  return (
    <div className='pizza-filter'>
      <div className='pizza-filter__ingredients'>
        <h3>Ingredients</h3>
        <div className='drop-here-card'>
        </div>
        <IngredientList
          ingredients={filteredPizzaList.ingredients}
          className='draggable-ingredients'
        />
      </div>
      <div className='pizza-filter__blacklist'>
        <h3>Blacklist</h3>
        <IngredientList
          ingredients={filteredPizzaList.blacklist}
          className='draggable-blacklist'
        />
      </div>
      <div className='pizza-filter__whitelist'>
        <h3>Whitelist</h3>
        <IngredientList
          ingredients={filteredPizzaList.whitelist}
          className='draggable-whitelist'
        />
      </div>
    </div>
  )
}

export default PizzaFilter
