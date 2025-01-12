import { useContext } from "react";
import WPContext from "../context/wp-context";
import { CarPost } from "../types/carpost";

const FeaturedCars = () => {
  const { cars } = useContext(WPContext);
  const featuredCars =
    cars?.filter((car: CarPost) => car.acf.car_post_options.is_featured) || [];

  return (
    <div>
      <h2>Featured Cars</h2>
      {featuredCars.length > 0 ? (
        featuredCars.map((car: CarPost) => (
          <div key={car.id}>
            <h3>{car.title.rendered}</h3>
            <img src={car.featured_image_url} alt={car.title.rendered} />
          </div>
        ))
      ) : (
        <div>No Featured Cars</div>
      )}
    </div>
  );
};

export default FeaturedCars;
