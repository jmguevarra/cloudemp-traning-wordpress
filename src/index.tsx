import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'

// Main component of the app
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <main className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-blue-600 font-bold mb-4">Hello, World!</h1>
        <p className="text-xl text-gray-700">
          This is a simple React app styled with TailwindCSS and TypeScript.
        </p>
      </main>
    </div>
  );
};

// Create a root and render the App component inside the 'root' element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
