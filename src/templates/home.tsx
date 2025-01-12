import { useContext } from "react";
import WPContext from "../context/wp-context";
import SlickBasicSlider from "../components/sliders/slick-basic";

const Home = () => {
  const { cars } = useContext(WPContext);

  return <SlickBasicSlider></SlickBasicSlider>;
};

export default Home;
