import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { 
  createRootRoute, 
  createRoute, 
  createRouter, 
  RouterProvider,
  Outlet
} from '@tanstack/react-router'
import App from './App'
import ProjectsPage from './pages/ProjectsPage'
import './index.css'

const queryClient = new QueryClient()

// Create a root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
})

// Create index and projects routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: ProjectsPage,
})

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, projectsRoute])

// Create the router
const router = createRouter({ routeTree })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
