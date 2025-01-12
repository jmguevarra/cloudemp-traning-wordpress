import { useContext } from "react";
import WPContext from "../context/wp-context";
import { CarPost } from "../types/carpost";

const LastestCars = () => {
  const { cars, page } = useContext(WPContext);
  const lastestCars = cars?.slice(
    0,
    page.acf?.page_settings.no_of_lastest_cars ?? 1
  );

  return (
    <div>
      <h2>Lastest Cars</h2>
      {lastestCars.length > 0 ? (
        lastestCars.map((car: CarPost) => (
          <div key={car.id}>
            <h3>{car.title.rendered}</h3>
            <img src={car.featured_image_url} alt={car.title.rendered} />
          </div>
        ))
      ) : (
        <div>No Lastest Cars</div>
      )}
    </div>
  );
};

export default LastestCars;
