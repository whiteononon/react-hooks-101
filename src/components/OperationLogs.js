import React, { useContext } from 'react'
import AppContext from '../contexts/AppContexts'

import OperationLog from '../components/OperationLog'

const OperationLogs = () => {

    const { state } = useContext(AppContext)

    return (
        <>
            <h4>操作ログ一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">操作</th>
                        <th scope="col">日時</th>
                    </tr>
                </thead>
                <tbody>
                    {state.operationLogs.map((operationLog, index) => (
                        <OperationLog key={index} operationLog={operationLog} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default OperationLogs