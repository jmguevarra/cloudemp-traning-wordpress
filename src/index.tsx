import "./styles/global.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./templates/home";
import WPContext from "./context/wp-context";
import { CarPost } from "./types/carpost";
import { Notifier } from "./types/notifier";
import { MESSAGE_STATUSES } from "./enums/statuses.enum";

// Main component of the app
const App: React.FC = () => {
  const [cars, setCars] = useState<CarPost[]>([]);
  const [notifier, setNotifier] = useState<Notifier>({} as Notifier);

  //get the Cars Post Object
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
        console.log(data);
        setCars(data);
      })
      .catch((err) => {
        setNotifier({
          message: `Error on getting Cars in the ${WPData.apiUrl}/cars`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      });
  }, []);

  return (
    <WPContext.Provider
      value={{
        cars,
        setCars,
        notifier,
        setNotifier,
      }}
    >
      <Home></Home>
    </WPContext.Provider>
  );
};

// Create a root and render the App component inside the 'root' element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
