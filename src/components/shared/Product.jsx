import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
import Ratings from "./Ratings";

function Poduct({ product }) {
  const { pathname } = useLocation();
  const { _id, name, imageURL, brand, rating, price, type } = product;
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleToNavigate = () => {
    navigate(`/products/details/${_id}`);
  };
  return (
    <div
      className="flex flex-col group cursor-pointer"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className={` ${
          theme === "light" ? "shadow-lg" : "shadow-md shadow-gray-500"
        } mb-3 relative overflow-hidden`}
        onClick={handleToNavigate}
      >
        <img
          src={imageURL}
          alt=""
          className="group-hover:scale-125 duration-1000"
        />
        <div className=" absolute top-0 left-0 group-hover:w-full group-hover:h-full bg-black bg-opacity-10 "></div>
      </div>
      <div className={`flex-grow ${pathname === "/" && "text-center"} mb-6`}>
        <h3
          className={`font-bold  ${
            theme === "light" ? "text-title-color" : "text-gray-400"
          } text-lg `}
        >
          {name && name.length > 20 ? name.slice(0, 20) + "..." : name}
        </h3>

        {pathname !== "/" && (
          <div className="flex justify-between text-gray-600 font-medium mb-1 capitalize">
            <p>Brand: {brand}</p>
            <p>Type: {type}</p>
          </div>
        )}

        <div
          className={`text-gray-600 font-medium ${
            pathname !== "/" && "flex justify-between"
          }`}
        >
          <p>
            <Ratings rev={rating} id={_id}></Ratings> ({rating} reviews)
          </p>{" "}
          <p className="text-base md:text-xl font-semibold ">${price}</p>
        </div>
      </div>
      {pathname !== "/" && (
        <div className="flex  gap-2">
          <Link
            to={`/products/details/${_id}`}
            className="btn-primary bg-transparent text-primary hover:bg-primary border border-primary hover:border-primary hover:text-white text-sm md:text-base px-2 md:px-5 py-1 md:py-2 rounded-md "
          >
            Details
          </Link>
          <Link
            to={`/products/update/${_id}`}
            className="btn-primary bg-transparent border border-secondary hover:border-secondary hover:bg-secondary text-secondary hover:text-white text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded-md"
          >
            Update
          </Link>
        </div>
      )}
    </div>
  );
}

Poduct.propTypes = {
  product: PropTypes.object,
};

export default Poduct;
