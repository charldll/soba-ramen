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
  const isRamen = children === "Stwórz ramen";
  const isOnRamenPage = location.pathname === "/custom-ramen";

  return (
    <NavLink
      to={to}
      className={classNames(
        isActive
          ? "bg-[#122653] text-[#f9f3ed]"
          : "text-[#E6E1E7] hover:shadow-md hover:bg-[#bf2821] hover:text-[#f9f3ed]",
        "relative rounded-md px-3 py-2 text-sm font-semibold",
        isRamen && !isOnRamenPage ? "animate-pulse" : "",
      )}
      role="navigation"
    >
      {children}
    </NavLink>
  );
}
