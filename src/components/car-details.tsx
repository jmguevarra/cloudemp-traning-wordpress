import { CarPost } from "../types/carpost";

interface props {
  car: CarPost | null;
}

const CarDetails: React.FC<props> = ({ car }) => {
  //return if no car
  if (!car)
    return (
      <>
        <div>No data</div>
      </>
    );

  const { specifications, promos } = car.acf;

  return (
    <>
      <div className={`car-details ${promos.on_sale ? "on-sale" : ""}`}>
        <div className="heading">
          <h3>{car.title.rendered}</h3>
          <span className="model">{specifications.model}</span>
        </div>
        <div className="car-other-details">
          <ul className="car-specs">
            <li className="car-spec">
              Engine Size:{" "}
              <span className="engine-size--text">
                {specifications.engine_size}
              </span>
            </li>
            <li className="car-spec">Color: {specifications.color}</li>
            <li className={`car-spec ${promos.on_sale ? "discounted" : ""}`}>
              Price:{" "}
              {promos.on_sale ? (
                <>
                  <span className="price-old-value line-through">
                    {specifications.price}
                  </span>{" "}
                  <span className="price-value">
                    {specifications.price * promos.discount -
                      specifications.price}
                  </span>
                </>
              ) : (
                <span className="price-value">{specifications.price}</span>
              )}
            </li>
            <li className="car-spec">
              Seats:
              <span className="no-seats--text">
                {specifications.no_of_seats}
              </span>
            </li>
            <li className="car-spec">
              Year Manufactured:{" "}
              <span className="year-manufactured--text">
                ${specifications.year_of_manufacture}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
