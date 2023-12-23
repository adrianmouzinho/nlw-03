import { createBrowserRouter } from 'react-router-dom'

import { Landing } from './pages/Landing'
import { OrphanagesMap } from './pages/OrphanagesMap'
import { CreateOrphanage } from './pages/CreateOrphanage'
import { Orphanage } from './pages/Orphanage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/app',
    element: <OrphanagesMap />,
  },
  {
    path: '/orphanages/create',
    element: <CreateOrphanage />,
  },
  {
    path: '/orphanages/:id',
    element: <Orphanage />,
  },
])
