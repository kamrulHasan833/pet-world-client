import SectionWrapperBig from "../layout/SectionWrapperBig";
import Slider from "../shared/Slider";

const slides = [
  {
    id: 1,
    title: "Balanced Diet For Your Love",
    image: "https://i.ibb.co/55D7zMD/banner1.jpg",
    image_dark: "https://i.ibb.co/55D7zMD/banner1.jpg",
    desc: "Free shipping",
  },
  {
    id: 2,
    title: "Best toyes for your puppy",
    image: "https://i.ibb.co/9wZxRDX/banner2.jpg",
    image_dark: "https://i.ibb.co/9wZxRDX/banner2.jpg",
    desc: "get 50% discount",
  },
];

function HeroSlider() {
  return (
    <SectionWrapperBig>
      <Slider grow="flex-grow " slides={slides}></Slider>
    </SectionWrapperBig>
  );
}

export default HeroSlider;
