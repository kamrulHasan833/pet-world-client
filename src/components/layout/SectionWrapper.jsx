import PropTypes from "prop-types";

export default function SectionWrapper({ children }) {
  return (
    <div
      className={`max-w-standard mx-6 sm:mx-10 lg:mx-14 xl:mx-24 2xl:mx-auto`}
    >
      {children}
    </div>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
};
