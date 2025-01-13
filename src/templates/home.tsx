import { useContext } from "react";
import WPContext from "../context/wp-context";
import SlickBasicSlider from "../components/sliders/slick-basic";
import { CarPost } from "../types/carpost";
import FeaturedCars from "../sections/featured-cars";
import LastestCars from "../sections/lastest-cars";
import CarListings from "../sections/car-listings";

const Home = () => {
  const { cars, page } = useContext(WPContext);
  const { no_of_cars_in_hero_carousel } = page.acf?.page_settings ?? [];

  //get the first 4 Car images
  const contents: {
    title: string;
    model: string;
    imageLink: string;
    pageUrl: string;
  }[] = cars.slice(0, no_of_cars_in_hero_carousel).map((car: CarPost) => {
    return {
      title: car.title.rendered,
      model: car.acf.specifications.model,
      imageLink: car.featured_image_url.replace(/\\/g, ""),
      pageUrl: car.link,
    };
  });

  return (
    <>
      <SlickBasicSlider contents={contents}></SlickBasicSlider>
      <FeaturedCars></FeaturedCars>
      <LastestCars></LastestCars>
      <CarListings></CarListings>
    </>
  );
};

export default Home;
