import Slider from "react-slick";
import slider1 from "../../assets/images/Slider/chair.png" ;
import slider2 from "../../assets/images/Slider/Slider_02.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";


const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };
  return (
    <div classname="bg-slider-bg">
  <div classname="container m-auto mainSlider">
    <Slider {...settings}>
      <div classname="p-10">
        <div classname="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between items-center w-full">
          <div>
            <p classname="text-smallFontColor sm:text-justify sm:text-sm md:font-bold lg:font-bold lg:text-base">
              Best Furniture For Your Castle....
            </p>
            <h3 classname="text-black sm:text-lg md:text-4xl lg:text-4xl font-bold my-4">
              New Furniture Collection Trends in 2020
            </h3>
            <p classname="sm:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              in est adipiscing in phasellus non in justo.
            </p>
          </div>
          <div classname="mt-5 lg:mt-0 md:mt-0">
            <Image width={500} classname="w-4/5 m-auto" src={slider1} alt="SLider name" />
          </div>
        </div>
      </div>
      <div classname="p-10">
        <div classname="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-between items-center w-full">
          <div classname>
            <Image width={} classname="w-4/5 m-auto" src={slider2} alt="SLider name" />
          </div>
          <div>
            <p classname="text-smallFontColor sm:text-justify sm:text-sm md:font-bold lg:font-bold lg:text-base">
              Best Furniture For Your Castle....
            </p>
            <h3 classname="text-black sm:text-lg md:text-4xl lg:text-4xl font-bold my-4">
              Unique Features Of leatest &amp;Trending Poducts
            </h3>
            <p classname="sm:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              in est adipiscing in phasellus non in justo.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</div>

  );
};

export default HomeSlider;
