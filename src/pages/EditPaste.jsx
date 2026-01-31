import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditPaste = ({ pastes, updatePaste }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const paste = pastes.find((p) => p.id === id);

  const [title, setTitle] = useState(paste.title);
  const [content, setContent] = useState(paste.content);

  const handleUpdate = () => {
    updatePaste(id, { title, content });
    navigate("/");
  };

  return (
    <div className="container">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="primary-btn" onClick={handleUpdate}>
        Update Paste
      </button>
    </div>
  );
};

export default EditPaste;
