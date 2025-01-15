import "./styles/global.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./templates/home";
import WPContext from "./context/wp-context";
import { CarPost } from "./types/carpost";
import { Notifier } from "./types/notifier";
import { MESSAGE_STATUSES } from "./enums/statuses.enum";
import { PagePostType } from "./types/page-post-type";
import Modal from "./components/popups/modal";

// Main component of the app
const App: React.FC = () => {
  const [cars, setCars] = useState<CarPost[]>([]);
  const [page, setPage] = useState<PagePostType>({} as PagePostType);
  const [notifier, setNotifier] = useState<Notifier>({} as Notifier);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  //get Current page object
  useEffect(() => {
    fetch(`${WPData.apiUrl}/pages/${WPData.currentPageId}`, {
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
        setPage(data);
      })
      .catch((err) => {
        setNotifier({
          message: `Error on getting Page data in the ${WPData.apiUrl}/page/${WPData.siteUrl}`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      });
  }, []);

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
    <div className="wp-byd-wrapper prose">
      <WPContext.Provider
        value={{
          page,
          setPage,
          cars,
          setCars,
          notifier,
          setNotifier,
          isModalOpen,
          setIsModalOpen,
          modalContent,
          setModalContent,
        }}
      >
        <Home></Home>
        <Modal></Modal>
      </WPContext.Provider>
    </div>
  );
};

// Create a root and render the App component inside the 'root' element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
