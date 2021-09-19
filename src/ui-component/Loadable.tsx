import React, { Suspense } from 'react'

// project imports
import Loader from './Loader'

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component: React.ElementType) => (props: any) =>
    (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    )

export default Loadable
