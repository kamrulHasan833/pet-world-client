import PropTypes from "prop-types";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function LinkButton({ text, path }) {
  return (
    <div
      className="mt-6 md:mt-8"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <Link
        to={path}
        className=" text-white  px-6 py-3 bg-primary  rounded-full mt-6  relative group capitalize "
      >
        <span className="absolute left-1/2 top-1/2 group-hover:top-0 group-hover:left-0 group-hover:bottom-0 group-hover:right-0 transition-[.3s] w-0 group-hover:w-full h-0 group-hover:h-full rounded-full bg-dark z-10"></span>
        <span className="z-20 absolute ">
          {text}{" "}
          <HiArrowLongRight className=" inline-block text-xl md:text-2xl z-20 transition-[.4s] group-hover:translate-x-1"></HiArrowLongRight>
        </span>
        <span>
          {text}{" "}
          <HiArrowLongRight className=" inline-block text-xl md:text-2xl"></HiArrowLongRight>
        </span>
      </Link>
    </div>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default LinkButton;
