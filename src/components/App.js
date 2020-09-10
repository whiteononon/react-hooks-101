import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducer from '../reducers'
// import reducer from '../reducers/index'
import Event from './Event'

const App = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [state, dispath] = useReducer(reducer, [])
  const addEvent = (e) => {
    e.preventDefault()
    dispath({ type: 'CREATE_EVENT', title, body })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = (e) => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか')
    if (result) {
      dispath({
        type: 'DELETE_ALL_EVENT',
      })
    }
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディー</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispath={dispath} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
