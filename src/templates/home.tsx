import { useContext } from "react";
import WPContext from "../context/wp-context";
import SlickBasicSlider from "../components/sliders/slick-basic";
import { CarPost } from "../types/carpost";

const Home = () => {
  const { cars } = useContext(WPContext);
  const imagesLinks = cars.map((car: CarPost) => car.car_gallery_image_field);
  console.log(imagesLinks, cars);

  return <SlickBasicSlider links={[]}></SlickBasicSlider>;
};

export default Home;
