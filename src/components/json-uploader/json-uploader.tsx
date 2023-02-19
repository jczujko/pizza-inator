import React, { useState, type ChangeEvent } from 'react'
import { type PizzaMenu } from '../../utils/types'
import { pecorino } from '../../utils/pecorino'
import { pizzaMenuValidator } from '../../helpers/pizzaMenuValidator'

interface Props {
  onSave: (menu: PizzaMenu) => void
}

const JsonUploader: React.FC<Props> = ({ onSave }: Props): JSX.Element => {
  const [menuJson, setMenuJson] = useState<PizzaMenu | undefined>(undefined)
  const submitDisabled: boolean = menuJson === undefined

  const handleJsonUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files === null) {
      return
    }
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0])
    fileReader.onload = e => {
      try {
        const json = JSON.parse(e.target?.result as string)
        if (pizzaMenuValidator(json)) {
          setMenuJson(json)
        } else {
          alert('JSON file you uploaded is not correct')
          setMenuJson(undefined)
        }
      } catch (e) {
        alert(e)
      }
    }
  }

  return (
    <>
      <input type="file" accept=".json" onChange={handleJsonUpload} />
      <button onClick={() => { onSave(menuJson as PizzaMenu) }} disabled={submitDisabled}>Submit</button>
      <button onClick={() => { onSave(pecorino) }}>Load default</button>
    </>
  )
}

export default JsonUploader
