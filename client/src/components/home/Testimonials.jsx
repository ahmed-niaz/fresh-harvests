import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { sliders } from "./Slider";
const Testimonials = () => {
  return (
    <main className="mt-[150px] flex flex-col items-center justify-center">
      <p className="text-[#749B3F] text-rubik bg-[#749B3F1A] py-[4px] px-[12px] w-[140px] font-bold text-center rounded-md">
        Special Offer
      </p>
      <h4 className="text-[32px] lg:text-[48px] font-rubik font-medium text-[#212337]">
        What Our Customers Say
      </h4>
      <p className="font-questrial mb-[12px] lg:w-4/12 text-center w-10/12">
        Don`t just take our word for it—here`s what some of our customers have
        to say about their experience with Fresh Harvest:
      </p>
      {/* swiper */}
      <Swiper
        className="container mx-auto mb-16"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            {slide.content}
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Testimonials;
