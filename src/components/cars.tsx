import { useEffect, useState } from "react";

interface Car {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

const Cars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(WPData);
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

export default Cars;
