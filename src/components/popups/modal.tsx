// Modal.tsx
import { useContext } from "react";
import WPContext from "../../context/wp-context";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, modalContent } = useContext(WPContext);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          &times;
        </button>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
