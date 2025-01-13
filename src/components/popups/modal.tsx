// Modal.tsx
import { useContext } from "react";
import WPContext from "../../context/wp-context";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, modalContent } = useContext(WPContext);

  if (!isModalOpen) return null;

  //closing modal
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-96 transition-all transform relative ${
          isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
        }`}
      >
        <a className="modal-btn--closing" onClick={onClose}>
          &times;
        </a>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
