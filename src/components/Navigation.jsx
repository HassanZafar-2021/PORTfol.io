import { NavLink } from "react-router-dom";

const links = [
  { to: "/about",     label: "About"     },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact",   label: "Contact"   },
  { to: "/resume",    label: "Resume"    },
];

function Navigation() {
  return (
    <nav className="nav-bar">
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;