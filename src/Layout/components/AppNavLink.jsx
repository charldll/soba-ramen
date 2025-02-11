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
          ? "bg-[#122653] text-[#f9f3ed]"
          : "text-[#122653] hover:bg-[#28437e] hover:text-[#f9f3ed]",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      role="navigation"
    >
      {children}
    </NavLink>
  );
}
