import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";

function NavItem({ children, path }) {
  const { theme } = useTheme();
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? `text-base  border-b  border-primary  rounded-sm text-primary hover:text-primary hover:bg-transparent focus:bg-transparent`
            : `text-base border-b border-transparent hover:border-primary rounded-sm hover:text-primary hover:bg-transparent  ${
                theme === "dark" ? "text-gray-500" : "text-black "
              }  `;
        }}
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}
NavItem.propTypes = {
  children: PropTypes.node,
  path: PropTypes.node,
};
export default NavItem;
