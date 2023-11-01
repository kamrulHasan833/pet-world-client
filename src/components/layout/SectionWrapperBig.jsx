import PropTypes from "prop-types";

function SectionWrapperBig({ children }) {
  return <div className="max-w-large  mx-auto">{children}</div>;
}

SectionWrapperBig.propTypes = { children: PropTypes.node };

export default SectionWrapperBig;
