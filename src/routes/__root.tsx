import { createRootRoute, Outlet } from '@tanstack/react-router'
import Link from '../components/Link.tsx';

export const Route = createRootRoute({
  component: () => (
    <div className="w-full overflow-hidden select-none">
      <div className="p-2 flex gap-2 top-9 fixed navbar">
        <Link to="/" color='primary' className="[&.active]:font-bold font-heading">
          Home
        </Link>
        <Link to="/projets" color='primary' className="[&.active]:font-bold font-heading">
          Projets
        </Link>
      </div>
      <Outlet />
    </div>
  ),
})