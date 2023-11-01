import PropTypes from "prop-types";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import LinkButton from "./buttons/LinkButton";

function Slide({ slide }) {
  const { title, image, image_dark, desc } = slide;
  const { theme } = useTheme();

  return (
    <div className=" relative">
      <div>
        <div
          className={
            theme === "light" ? "bg-transparent" : "bg-dark opacity-30"
          }
        >
          <img
            src={theme === "light" ? image : image_dark}
            alt=""
            className="transition-[3s]"
            data-aos="zoom-out"
            data-aos-duration="2000"
          />
        </div>
      </div>
      <SectionWrapper>
        <div className="absolute top-1/2 -translate-y-1/2 pl-6 md:pl-10 xl:pl-0 z-10">
          <p
            className={`${
              theme === "light" ? "text-title-color " : "text-dark"
            } font-medium text-base md:text-lg uppercase max-w-[200px]  lg:text-center`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {desc}
          </p>
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl text-white 2xl:text-7xl font-bold max-w-32 max-w-xs md:max-w-full mb-0 md:mb-2 capitalize`}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {title}
          </h1>

          <LinkButton text="buy now" path="/products/all" />
        </div>
      </SectionWrapper>
    </div>
  );
}

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
