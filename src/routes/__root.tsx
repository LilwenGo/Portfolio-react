import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="w-full p-9">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold font-heading">
          Home
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  ),
})