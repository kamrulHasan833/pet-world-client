import PropTypes from "prop-types";

function ButtonPrimary({ text, clickHandler }) {
  return (
    <button
      className="text-white  px-6 py-3 bg-primary  rounded-full mt-6  relative group capitalize  "
      onClick={clickHandler}
    >
      <span className="absolute left-1/2 top-1/2 group-hover:top-0 group-hover:left-0 group-hover:bottom-0 group-hover:right-0 transition-[.3s] w-0 group-hover:w-full h-0 group-hover:h-full rounded-full bg-dark z-10"></span>
      <span className="z-20 absolute">{text} </span>
      <span>{text} </span>
    </button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default ButtonPrimary;
