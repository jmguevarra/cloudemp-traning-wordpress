import { useContext } from "react";
import WPContext from "../context/wp-context";
import { CarPost } from "../types/carpost";

const FeaturedCars = () => {
  const { cars } = useContext(WPContext);
  const featuredCars =
    cars?.filter((car: CarPost) => car.acf.car_post_options.is_featured) || [];

  return (
    <div className="wp-section featured-section">
      <h2 className="mb-6">Featured Cars</h2>
      {featuredCars.length > 0 ? (
        featuredCars.map((car: CarPost) => (
          <div className="featured-cars grid grid-cols-3">
            <div key={car.id} className="featured-car">
              <img src={car.featured_image_url} alt={car.title.rendered} />
              <div className="featured-contet">
                <h3>{car.title.rendered}</h3>
                <div>{car.content.rendered}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No Featured Cars</div>
      )}
    </div>
  );
};

export default FeaturedCars;
