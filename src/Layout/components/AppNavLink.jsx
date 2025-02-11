import PropTypes from "prop-types";
import { NavLink } from "react-router";
import { classNames } from "../../utils/class-names";

//Opisuje typ parametru, czy jest wymagany - moje założenia, jaki typ parametru ma być.
// TODO: Poczytać o PropTypes
AppNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default function AppNavLink({ to, location, children }) {
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      role="navigation"
    >
      {children}
    </NavLink>
  );
}
