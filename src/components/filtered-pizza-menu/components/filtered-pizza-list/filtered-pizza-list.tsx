import React, { useContext } from 'react'
import { MenuContext } from '../../../../App'
import { type FilteredPizza, type PizzaListContext } from '../../../../utils/types'
import './style.css'

const FilteredPizzaList: React.FC = (

): JSX.Element => {
  const filteredPizzaList = useContext<PizzaListContext>(MenuContext as React.Context<PizzaListContext>)
  const pizzaPricesTemplateColumns = filteredPizzaList.sizes.map((size: string) => '100px').join(' ')
  const pizzaTemplateColumns = `${100 * filteredPizzaList.sizes.length}px`

  return (
    <div className='filtered-pizza-list'>
      <div className='pizza-header' style={{ gridTemplateColumns: `auto ${pizzaPricesTemplateColumns}` }}>
        <span>Name</span>
        {filteredPizzaList.sizes.map((size: string, index: number): JSX.Element => {
          return <span key={`size-${index}`}>{size}</span>
        })}
      </div>
      {
        filteredPizzaList.pizzas.map((pizza: FilteredPizza, index: number): JSX.Element =>
          <div className={pizza.isHidden ? 'pizza--hidden' : 'pizza'} key={`pizza-${index + 1}`} style={{ gridTemplateColumns: `auto ${pizzaTemplateColumns}` }}>
            <div className='pizza-info' key={`pizza-info-${index + 1}`}>
              <div className='pizza-info__name'>{`${index + 1}. ${pizza.name}`}</div>
              <div className='pizza-info__ingredients'>{pizza.ingredients.join(', ')}</div>
            </div>
            <div className='pizza-prices' style={{ gridTemplateColumns: pizzaPricesTemplateColumns }}>
              {pizza.prices.map((price: number, index: number): JSX.Element =>
                <span key={`pizza-price=${index}`}>{`${price.toFixed(2)} ${filteredPizzaList.priceTag}`}</span>)}
            </div>
          </div>)
      }</div>
  )
}

export default FilteredPizzaList
