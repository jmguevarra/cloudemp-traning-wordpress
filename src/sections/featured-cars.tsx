import { useContext } from "react";
import WPContext from "../context/wp-context";
import { CarPost } from "../types/carpost";

const FeaturedCars = () => {
  const { cars } = useContext(WPContext);
  const featuredCars =
    cars?.filter((car: CarPost) => car.acf.car_post_options.is_featured) || [];

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section featured-section">
      <div className="container mx-auto">
        <h2 className="mb-6">Featured Cars</h2>
        <div className="featured-cars grid grid-cols-3 gap-4">
          {featuredCars.map((car: CarPost, index: number) => (
            <div key={car.id} className="featured-car">
              <img
                className="w-full mb-3 h-60 object-cover object-center"
                src={car.featured_image_url}
                alt={car.title.rendered}
              />
              <div className="featured-contet">
                <h3>{car.title.rendered}</h3>
                <p>{car.excerpt}</p>
                <a href={car.link} className={`wp-btn featured-btn-${index}`}>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
