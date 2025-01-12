import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import Cars from "./components/cars";

// Main component of the app
const App: React.FC = () => {
  return (
    <>
      <div>HIiii</div>
      <Cars></Cars>
    </>
  );
};

// Create a root and render the App component inside the 'root' element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
