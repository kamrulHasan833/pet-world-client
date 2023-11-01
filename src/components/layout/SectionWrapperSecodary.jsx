import PropTypes from "prop-types";
function SectionWrapperSecodary({ children }) {
  return <div className=" max-w-secondary mx-6 sm:mx-auto">{children}</div>;
}

SectionWrapperSecodary.propTypes = {
  children: PropTypes.node,
};

export default SectionWrapperSecodary;
