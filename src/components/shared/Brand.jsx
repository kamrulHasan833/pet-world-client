import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/themeContext";

function Brand({ category: newbrand }) {
  const { name, image } = newbrand;
  const navigate = useNavigate();
  const { theme } = useTheme();
  const handleNavigate = () => {
    navigate(`products/${name}`);
  };
  return (
    <div
      className=" cursor-pointer group"
      onClick={handleNavigate}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className={`rounded-full ${
          theme === "light" ? "bg-primary bg-opacity-5" : "bg-white opacity-90"
        }  `}
      >
        <img
          src={image.dark ? image.dark : image.light}
          alt=""
          className="rounded-full  group-hover:scale-125 transition-all"
        />
      </div>
      <h3
        className={`text-xl font-semibold ${
          theme === "light" ? "text-titile-color" : "text-gray-400"
        } text-center mt-4 uppercase`}
      >
        {name}
      </h3>
    </div>
  );
}

Brand.propTypes = {
  category: PropTypes.object,
};

export default Brand;
