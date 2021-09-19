import React, { lazy } from 'react'

// project imports
import MainLayout from 'layout/MainLayout'
import Loadable from 'ui-component/Loadable'

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')))

// utilities routing
const UtilsTypography = Loadable(
    lazy(() => import('views/utilities/Typography')),
)
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')))
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')))
const UtilsMaterialIcons = Loadable(
    lazy(() => import('views/utilities/MaterialIcons')),
)
const UtilsTablerIcons = Loadable(
    lazy(() => import('views/utilities/TablerIcons')),
)

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')))

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            element: <DashboardDefault></DashboardDefault>,
            path: '/',
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault></DashboardDefault>,
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography></UtilsTypography>,
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor></UtilsColor>,
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow></UtilsShadow>,
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons></UtilsTablerIcons>,
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons></UtilsMaterialIcons>,
        },

        {
            path: '/sample-page',
            element: <SamplePage></SamplePage>,
        },
    ],
}

export default MainRoutes
