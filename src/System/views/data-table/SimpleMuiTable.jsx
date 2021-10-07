import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'app/components'
import Axios from 'axios'
import MUIDataTable from 'mui-datatables'

const SimpleMuiTable = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [ExpenseList, setExpenseList] = useState([])

    useEffect(() => {
        Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) setExpenseList(data)
        })
        return () => setIsAlive(false)
    }, [isAlive])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Data Table', path: '/pages' },
                        { name: 'Expense Report' },
                    ]}
                />
            </div>
            <MUIDataTable
                title={'Expense Report'}
                data={ExpenseList}
                columns={columns}
                options={{
                    filterType: 'textField',
                    responsive: 'simple',
                    selectableRows: 'none', // set checkbox for each row
                    // search: false, // set search option
                    // filter: false, // set data filter option
                    // download: false, // set download option
                    // print: false, // set print option
                    // pagination: true, //set pagination option
                    // viewColumns: false, // set column option
                    elevation: 0,
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />
        </div>
    )
}

const columns = [
    {
        name: 'expensename', // field name in the row object
        label: 'Expense Name', // column title that will be shown in table
        options: {
            filter: true,
        },
    },
    {
        name: 'amount',
        label: 'Amount',
        options: {
            filter: true,
        },
    },
    {
        name: 'date',
        label: 'Date',
        options: {
            filter: true,
        },
    },
    {
        name: 'status',
        label: 'Status',
        options: {
            filter: true,
        },
    },
]

export default SimpleMuiTable
