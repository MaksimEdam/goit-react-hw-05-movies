import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => (
  <>
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
