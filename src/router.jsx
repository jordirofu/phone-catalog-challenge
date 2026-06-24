import { createBrowserRouter } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Layout from './layouts/layout'
import PhoneListPage from './pages/PhoneListPage'
import PhoneDetailsPage from './pages/PhoneDetailsPage'
import CartPage from './pages/CartPage'

function PhoneDetailsRoute() {
  const { id } = useParams()
  return <PhoneDetailsPage key={id} />
}

const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PhoneListPage />,
        index: true,
      },
      {
        path: '/phones/:id',
        element: <PhoneDetailsRoute />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])

export default AppRouter
