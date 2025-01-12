import { useContext } from "react";
import WPContext from "../context/wp-context";
import SlickBasicSlider from "../components/sliders/slick-basic";
// import { CarPost } from "../types/carpost";

const Home = () => {
  const { cars, page } = useContext(WPContext);
  console.log(page, cars);

  // const imagesLinks = cars.map((car: CarPost) => car.featured_image_url);

  return <SlickBasicSlider links={[]}></SlickBasicSlider>;
};

export default Home;
