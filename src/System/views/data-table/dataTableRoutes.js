import React from 'react'

const dataTableRoutes = [
    {
        path: '/data-table/simple-mui-table',
        component: React.lazy(() => import('./SimpleMuiTable')),
    },
]

export default dataTableRoutes
