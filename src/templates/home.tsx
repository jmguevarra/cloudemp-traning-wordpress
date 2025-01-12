import { useEffect, useState } from "react";
import { CarPost } from "../types/carpost";

const Home = () => {
  const [cars, setCars] = useState<CarPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${WPData.apiUrl}/cars`, {
      headers: {
        "Content-Type": "application/json",
        "X-WP-Nonce": WPData.nonce, // Add nonce for authenticated requests
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch car posts.");
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Cars</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <h2>{car.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: car.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
