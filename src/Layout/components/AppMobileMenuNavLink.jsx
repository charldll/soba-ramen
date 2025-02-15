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
          ? "bg-[#122653] text-[#f9f3ed]"
          : "text-[#122653] hover:bg-[#28437e] hover:text-[#f9f3ed]",
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
