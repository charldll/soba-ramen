import { classNames } from "../../utils/class-names";
import { NavLink } from "react-router";
import PropTypes from "prop-types";

AppMobileMenuNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default function AppMobileMenuNavLink({
  to,
  location,
  children,
  onClick,
}) {
  const isActive = location.pathname === to;
  const isRamen = children === "Stwórz ramen";
  const isOnRamenPage = location.pathname === "/custom-ramen";

  return (
    <NavLink
      to={to}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block rounded-md px-3 py-2 text-base font-medium",
        isRamen && !isOnRamenPage ? "animate-pulse" : "",
      )}
      role="navigation"
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
