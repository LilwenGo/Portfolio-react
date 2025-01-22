import { createRootRoute, Outlet } from '@tanstack/react-router'
import Link from '../components/Links/Link.tsx';

export const Route = createRootRoute({
  component: () => (
    <div className="w-full p-9 overflow-hidden select-none">
      <div className="p-2 flex gap-2 fixed navbar">
        <Link to="/" className="[&.active]:font-bold font-heading">
          Home
        </Link>
        <Link to="/projets" className="[&.active]:font-bold font-heading">
          Projets
        </Link>
      </div>
      <Outlet />
    </div>
  ),
})