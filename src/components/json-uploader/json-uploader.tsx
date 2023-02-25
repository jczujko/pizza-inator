import React, { useState, type ChangeEvent } from 'react'
import { type PizzaMenu } from '../../utils/types'
import { pecorino } from '../../utils/pecorino'
import { pizzaMenuValidator } from '../../helpers/pizzaMenuValidator'
import './style.css'
import { example } from './example'

interface Props {
  onSave: (menu: PizzaMenu) => void
}

const JsonUploader: React.FC<Props> = ({ onSave }: Props): JSX.Element => {
  const [menuJson, setMenuJson] = useState<PizzaMenu | undefined>(undefined)
  const submitDisabled: boolean = menuJson === undefined
  const [isHelpHidden, setIsHelpHidden] = useState<boolean>(true)

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

  const toggleHelpVisibility = (): void => { setIsHelpHidden(!isHelpHidden) }

  return (
    <div className='json-uploader'>
      <div className={!isHelpHidden ? 'json-uploader__help' : 'json-uploader__help--hidden'}>
        <pre>
          <code>
            Example acceptable JSON:<br/>
            {example}

          </code>
        </pre>
      </div>
      <div className='json-uploader__input'>
        <input type="file" accept=".json" onChange={handleJsonUpload} />
        <div className='json-uploader__input-help' onClick={toggleHelpVisibility}>?</div>
      </div>
      <div className='json-uploader__buttons'>
        <button onClick={() => { onSave(menuJson as PizzaMenu) }} disabled={submitDisabled}>Submit</button>
        <button onClick={() => { onSave(pecorino) }}>Load default</button>
      </div>
    </div>
  )
}

export default JsonUploader
