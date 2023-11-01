import PropTypes from "prop-types";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionWrapper from "../layout/SectionWrapper";
import PromoSlide from "../shared/PromoSlide";
import SectionHeader from "../shared/SectionHeader";

function PromoSlider({ promoSlides }) {
  return (
    <section>
      <SectionWrapper>
        <SectionHeader>Hot Deals</SectionHeader>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={24}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full rounded-lg shadow-xl"
        >
          {promoSlides.length > 0 &&
            promoSlides.map((promoSlide, ind) => (
              <SwiperSlide key={ind}>
                <PromoSlide promoSlide={promoSlide}></PromoSlide>
              </SwiperSlide>
            ))}
        </Swiper>
      </SectionWrapper>
    </section>
  );
}
PromoSlider.propTypes = {
  promoSlides: PropTypes.array,
};

export default PromoSlider;
