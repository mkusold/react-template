import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './routes'
import { Home } from './Home'
import { Map } from './Map'
import { FourOhFour } from './FourOhFour'

// refer to routes.ts for further route information
// this separation exists to prevent circular dependencies
export const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: (<Home />),
    errorElement: (<FourOhFour />)
  },
  {
    path: ROUTES.map.path,
    element: (<Map />)
  }
])
