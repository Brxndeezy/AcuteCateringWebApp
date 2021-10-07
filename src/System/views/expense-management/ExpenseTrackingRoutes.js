import React from 'react'

const expenseTrackingRoute = [
    {
        path: '/expense-tracking-table',
        exact: true,
        component: React.lazy(() => import('./ExpenseTrackingTable')),
    },
]

export default expenseTrackingRoute



