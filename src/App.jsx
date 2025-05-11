import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import ChallengeOne from './Pages/Easy: Basic Form with Validation (Console Output)/ChallengeOne'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ZustandCounter from './Pages/Easy: Simple Global Counter/ZustandCounter'
import FormValidation from './Pages/Easy: Display Data from API/FormValidation'
import DataMutation from './Pages/Easy: Simple Data Mutation (Without Re-fetch)/DataMutation'
import ConditionalFetching from './Pages/Easy: Conditional Fetching Based on State/ConditionalFetching'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/easy1/",
    element: <ChallengeOne />
  },
  {
    path: "/easy2/",
    element: <ZustandCounter />
  },
  {
    path: "/easy3/",
    element: <FormValidation />
  },
  {
    path: "/easy4/",
    element: <ConditionalFetching />
  }
])

export const queryClient = new QueryClient();

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App