import { useContext } from "react";
import WPContext from "../context/wp-context";
import { CarPost } from "../types/carpost";

const CarListings = () => {
  const { cars } = useContext(WPContext);

  return (
    <div>
      <h2>Car Listings</h2>
      {cars.length > 0 ? (
        cars.map((car: CarPost) => (
          <div key={car.id}>
            <h3>{car.title.rendered}</h3>
            <img src={car.featured_image_url} alt={car.title.rendered} />
          </div>
        ))
      ) : (
        <div>No Cars Avaliable</div>
      )}
    </div>
  );
};

export default CarListings;
