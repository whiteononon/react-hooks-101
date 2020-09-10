import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
// import reducer from '../reducers/index'
import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const [state, dispath] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispath={dispath} />
      <Events state={state} dispath={dispath} />
    </div>
  )
}

export default App
