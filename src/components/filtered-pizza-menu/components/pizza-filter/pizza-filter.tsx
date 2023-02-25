import React, { useContext, useRef } from 'react'
import { MenuContext } from '../../../../App'
import { type IngredientContainer, type PizzaListContext } from '../../../../utils/types'
import './style.css'
import Draggable, { type DraggableData, type DraggableEvent } from 'react-draggable'

const PizzaFilter: React.FC = (): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)

  const getDropFields = (): [HTMLElement | null, HTMLElement | null, HTMLElement | null] => {
    const ingredients = document.getElementById('ingredients')
    const blacklist = document.getElementById('blacklist')
    const whitelist = document.getElementById('whitelist')
    return [ingredients, blacklist, whitelist]
  }

  const getLists = (): [HTMLElement | null, HTMLElement | null, HTMLElement | null] => {
    const ingredients = document.getElementById('ingredients-list')
    const blacklist = document.getElementById('blacklist-list')
    const whitelist = document.getElementById('whitelist-list')
    return [ingredients, blacklist, whitelist]
  }

  const isInBoundaries = (cleintX: number, clientY: number, bounds: DOMRect): boolean => {
    if (cleintX > bounds.left && cleintX < bounds.right && clientY > bounds.top && clientY < bounds.bottom) {
      return true
    }
    return false
  }

  const getDropContainer = (clientX: number, clientY: number): IngredientContainer | undefined => {
    const [ingredientList, blacklist, whitelist] = getLists()
    if (ingredientList === null || blacklist === null || whitelist === null) {
      return
    }
    const ingredientsBound = ingredientList.getBoundingClientRect()
    const blacklistBound = blacklist.getBoundingClientRect()
    const whitelistBound = whitelist.getBoundingClientRect()
    if (isInBoundaries(clientX, clientY, ingredientsBound)) {
      return 'ingredients'
    } else if (isInBoundaries(clientX, clientY, blacklistBound)) {
      return 'blacklist'
    } else if (isInBoundaries(clientX, clientY, whitelistBound)) {
      return 'whitelist'
    }

    return undefined
  }

  const onDragStart = (e: DraggableEvent, data: DraggableData): void => {
    if (data.node === null) {
      return
    }
    if (e.target === null) {
      return
    }
    const [ingredientsDrop, blacklistDrop, whitelistDrop] = getDropFields()
    const [ingredientList, blacklist, whitelist] = getLists()
    if (ingredientsDrop === null || blacklistDrop === null || whitelistDrop === null ||
       ingredientList === null || blacklist === null || whitelist === null
    ) {
      return
    }
    ingredientsDrop.style.display = 'flex'
    blacklistDrop.style.display = 'flex'
    whitelistDrop.style.display = 'flex'
    ingredientList.style.visibility = 'hidden'
    blacklist.style.visibility = 'hidden'
    whitelist.style.visibility = 'hidden'
  }

  const onDragStop = (name: string) => (e: MouseEvent, data: DraggableData): void => {
    if (data.node === null) {
      return
    }
    if (e.target === null) {
      return
    }
    const [ingredientsDrop, blacklistDrop, whitelistDrop] = getDropFields()
    const [ingredientList, blacklist, whitelist] = getLists()
    if (ingredientsDrop === null || blacklistDrop === null || whitelistDrop === null ||
       ingredientList === null || blacklist === null || whitelist === null
    ) {
      return
    }
    ingredientsDrop.style.display = 'none'
    blacklistDrop.style.display = 'none'
    whitelistDrop.style.display = 'none'
    ingredientList.style.visibility = 'visible'
    blacklist.style.visibility = 'visible'
    whitelist.style.visibility = 'visible'
    const parent = data.node.parentElement
    if (parent !== null) {
      const from = parent.id.replace('-list', '')
      const to = getDropContainer(e.clientX, e.clientY)
      if (from !== to && to !== undefined) {
        filteredPizzaList.moveIngredient(name, from as IngredientContainer, to)
      }
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
    id: string
  }> = (props: {
    ingredients: string[]
    className: string
    id: string
  }): JSX.Element => {
    return (
      <div className={props.className} id={props.id}>
        {props.ingredients.map((ingredient: string, index: number) => DraggableIngredient(ingredient, index))}
      </div>
    )
  }

  return (
    <div className='pizza-filter' >
      <div className='pizza-filter__ingredients'>
        <h3>Ingredients</h3>
        <div className='drop-ingredients' id="ingredients">DROP HERE</div>
        <IngredientList
          ingredients={filteredPizzaList.ingredients}
          className='draggable-ingredients'
          id='ingredients-list'
        />
      </div>
      <div className='pizza-filter__blacklist'>
        <h3>Blacklist</h3>
        <div className='drop-blacklist' id="blacklist">DROP HERE</div>
        <IngredientList
          ingredients={filteredPizzaList.blacklist}
          className='draggable-blacklist'
          id="blacklist-list"
        />
      </div>
      <div className='pizza-filter__whitelist'>
        <h3>Whitelist</h3>
        <div className='drop-whitelist' id="whitelist">DROP HERE</div>
        <IngredientList
          ingredients={filteredPizzaList.whitelist}
          className='draggable-whitelist'
          id='whitelist-list'
        />
      </div>
    </div>
  )
}

export default PizzaFilter
