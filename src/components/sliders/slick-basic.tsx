import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface props {
  images: string[];
}

const SlickBasicSlider: React.FC<props> = ({ images }) => {
  //set configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[620px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickBasicSlider;
