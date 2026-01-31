import { X } from "lucide-react";

const PasteModal = ({ paste, onClose }) => {
  if (!paste) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          <X />
        </button>

        <h2>{paste.title}</h2>
        <pre>{paste.content}</pre>
      </div>
    </div>
  );
};

export default PasteModal;
