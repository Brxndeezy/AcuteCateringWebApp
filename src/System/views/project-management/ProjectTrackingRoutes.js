import React from 'react'

const projectTrackingRoute = [
    {
        path: '/project-tracking-table',
        exact: true,
        component: React.lazy(() => import('./ProjectTrackingTable')),
    },
]

export default projectTrackingRoute
