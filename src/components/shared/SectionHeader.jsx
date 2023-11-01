import PropTypes from "prop-types";
import { useTheme } from "../contexts/themeContext";

function SectionHeader({ children }) {
  const { theme } = useTheme();
  return (
    <div
      className="pt-10 md:pt-24 pb-6 md:pb-12 font-inter"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        className={`text-4xl lg:text-5xl capitalize ${
          theme === "light" ? "text-title-color " : "text-white"
        } font-semibold`}
      >
        {children}
      </h1>
    </div>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
