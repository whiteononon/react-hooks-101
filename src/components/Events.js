import React from 'react'
import Event from './Event'

const Events = ({state, dispath}) => {
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
                    {state.map((event, index) => (
                        <Event key={index} event={event} dispath={dispath} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Events