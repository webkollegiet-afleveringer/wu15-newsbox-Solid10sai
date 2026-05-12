import {useEffect } from "react";
import { Link, Outlet, useLocation  } from "react-router";
import './Layout.scss';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
  console.log(location);
}, [location]);
  
  return (
    
      <>
        <header className="appHeader">
            <Link to="/" className="appHeader__brandLink">Newsify</Link>
            {location.pathname === "/" && <p>Søgebar</p>}
        </header>

        <Outlet />
        <nav>
          <ul>
            <li>
              <Link to= "/">Home</Link>
            </li>
            <li>
              <Link to= "/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </>
  );
}