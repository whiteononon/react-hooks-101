import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm'
import Events from './Events'

import reducer from '../reducers/index'
import AppContext from '../contexts/AppContexts'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  }
  const [state, dispath] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispath }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
