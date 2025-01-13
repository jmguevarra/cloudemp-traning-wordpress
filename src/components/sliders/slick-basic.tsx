import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface props {
  contents: {
    title: string;
    model: string;
    imageLink: string;
    pageUrl: string;
  }[];
}

const SlickBasicSlider: React.FC<props> = ({ contents }) => {
  //set configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 8000,
    arrows: true,
  };

  return (
    <div className="slick-basic-slider">
      <Slider {...settings}>
        {contents.map((item, index) => (
          <div className={`slick-basic-item-${index}`} key={index}>
            <div
              className="slick-image h-svh px-5 flex items-center"
              style={{
                backgroundImage: `url(${item.imageLink})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="slick-item-overlay w-full h-full absolute left-0 bg-slick-overlay"></div>
              <div className="slick-content relative z-10">
                <h1>{item.title}</h1>
                <span className="car-model">{item.model}</span>
                <a className="wp-btn btn-secondary" href={item.pageUrl}>
                  View Details
                </a>
                <a className="wp-btn btn-primary" href={item.pageUrl}>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickBasicSlider;
