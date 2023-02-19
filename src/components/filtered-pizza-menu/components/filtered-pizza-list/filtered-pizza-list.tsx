import React from 'react'
import { type FilteredPizza, type PizzaListContext } from '../../../../utils/types'

interface Props {
  pizzasToFilter: FilteredPizza[]
  priceTag: string
  sizes: string[]
}

const FilteredPizzaList: React.FC<Props> = ({ pizzasToFilter, priceTag }: Props): JSX.Element => {
  return (<div className='filtered-pizza-list'>
    <div>
      PLACEHOLDER
    </div>
    {
      pizzasToFilter.map((pizza: FilteredPizza, index: number): JSX.Element =>
        <div className={pizza.isHidden ? 'pizza--hidden' : 'pizza'} key={`pizza-${index + 1}`}>
          <div className='pizza-info' key={`pizza-info-${index + 1}`}>
            <div className='pizza-info__name'>{`${index + 1}. ${pizza.name}`}</div>
            <div className='pizza-info__ingredients'>{pizza.ingredients.join(', ')}</div>
          </div>
          <div className='pizza-prices'>
            {pizza.prices.map((price: number, index: number): JSX.Element =>
              <span key={`pizza-price=${index}`}>{`${price.toFixed(2)} ${priceTag}`}</span>)}
          </div>
        </div>)
    }</div>)
}

export default FilteredPizzaList
