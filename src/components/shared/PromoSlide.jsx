import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";
function PromoSlide({ promoSlide }) {
  const { theme } = useTheme();
  const { _id, price, rating, name } = promoSlide;
  const discount = rating * 5;
  const priceAfterDiscount = price - price * (discount / 100);

  return (
    <div className=" relative">
      <div className="flex items-center  ">
        <div className="flex-grow text-center  ">
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-secondary lg:mb-2">
            {discount}% OFF{" "}
          </h3>
          <h4
            className={`text-base sm:text-lg md:text-xl  lg:text-3xl font-bold ${
              theme === "light" ? "text-title-color" : "text-primary"
            }`}
          >
            {name}
          </h4>
          <div className="flex gap-2 sm:gap-3 justify-center lg:gap-6  lg:mt-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl  font-bold text-red-600 line-through ">
              ${price}{" "}
            </p>
            <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold  text-gray-700">
              ${priceAfterDiscount.toFixed(2)}
            </span>
          </div>
          <div className="mt-5 md:mt-10">
            <Link
              to={`/products/details/${_id}`}
              className="text-xs sm:text-sm md:text-base  px-3 py-2  md:px-4 lg:px-6 lg:py-4 rounded-md bg-primary hover:bg-secondary text-white mt-5 md:mt-10"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex-shrink">
          <img src={promoSlide.imageURL} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
}

PromoSlide.propTypes = {
  promoSlide: PropTypes.object,
};

export default PromoSlide;
