import { useContext } from "react";
import WPContext from "../context/wp-context";
import SlickBasicSlider from "../components/sliders/slick-basic";
import { CarPost } from "../types/carpost";
// import { CarPost } from "../types/carpost";

const Home = () => {
  const { cars, page } = useContext(WPContext);
  const { no_of_cars_in_hero_carousel } = page.acf?.page_settings ?? [];

  //get the first 4 Car images
  const imagesLinks = cars
    .slice(0, no_of_cars_in_hero_carousel)
    .map((car: CarPost) => car.featured_image_url);

  return <SlickBasicSlider images={imagesLinks}></SlickBasicSlider>;
};

export default Home;
