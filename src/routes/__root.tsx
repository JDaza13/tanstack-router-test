import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" color="#fff">
          Home
        </Link>
        {"\t"}
        <Link
          to="/vehicle/$vin"
          params={{ vin: "TESTVIN001" }}
          search={{ sort: "asc", chartSignal: "voltage" }}
        >
          {"\t"}
          Vehicle
        </Link>
        {"\t"}
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
