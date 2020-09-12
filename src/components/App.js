import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import Events from './Events'

import reducer from '../reducers'
import AppContext from '../contexts/AppContexts'

console.log(AppContext)

const App = () => {
  const [state, dispath] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'I am Provider'}>
      <div className="container-fluid">
        <EventForm state={state} dispath={dispath} />
        <Events state={state} dispath={dispath} />
      </div>
    </AppContext.Provider>
  )
}

export default App
