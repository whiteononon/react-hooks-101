import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContexts'

const Events = () => {

    const { state } = useContext(AppContext)

    return (
        <>
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
                    {state.events.map((event, index) => (
                        <Event key={index} event={event} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Events