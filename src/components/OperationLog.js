import React from 'react'

const Event = ({ operationLog }) => {

    return (
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
    )
}

export default Event