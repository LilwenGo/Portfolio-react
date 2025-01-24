import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import HttpError from './components/HttpError';

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: function Error404() {
  return <HttpError code={404}>La page n'a pas été trouvée !</HttpError>;
}})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}