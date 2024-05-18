import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const [textdesc, setTextdesc] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal({ text, textdesc }))
    setText('')
    setTextdesc('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Trip Description</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            placeholder='Enter the title'
            required
            onChange={(e) => setText(e.target.value)}
          />
          <textarea
            type='text'
            name='textdesc'
            id='textdesc'
            value={textdesc}
            placeholder='Enter the description'
            required
            onChange={(e) => setTextdesc(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Trip
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm