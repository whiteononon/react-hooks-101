import React, { useContext } from 'react'
import { DELETE_EVENT } from '../actions'

import AppContext from '../contexts/AppContexts'

const Event = ({ event }) => {
    const { dispath } = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`このイベント${id}を削除しますか？`)
        if (result) {
            dispath({
                type: DELETE_EVENT,
                id,
            })
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={handleClickDeleteButton}
                >
                    削除
            </button>
            </td>
        </tr>
    )
}

export default Event