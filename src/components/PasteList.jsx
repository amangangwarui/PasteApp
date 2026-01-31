import { useMemo, useRef, useState } from "react";
import { Pencil, Trash, Eye, Copy, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PasteModal from "./PasteModal";

const PasteList = ({ pastes, deletePaste }) => {
  const [search, setSearch] = useState("");
  const [selectedPaste, setSelectedPaste] = useState(null);
  const copyRef = useRef(null);
  const navigate = useNavigate();

  const filteredPastes = useMemo(() => {
    return pastes.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, pastes]);

  const handleCopy = (text) => {
    copyRef.current.value = text;
    copyRef.current.select();
    document.execCommand("copy");
    alert("Copied ✅");
  };

  return (
    <>
      <input
        className="search-bar"
        placeholder="Search paste here..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>All Pastes</h2>

      <textarea ref={copyRef} style={{ position: "absolute", left: "-9999px" }} />

      {filteredPastes.map((paste) => (
        <div className="paste-card" key={paste.id}>
          <div>
            <h3>{paste.title}</h3>
            <p>{paste.content.slice(0, 80)}...</p>
          </div>

          <div className="paste-right">
            <div className="paste-actions">
              <button className="icon-btn" onClick={() => navigate(`/edit/${paste.id}`)}>
                <Pencil size={16} />
              </button>
              <button className="icon-btn" onClick={() => deletePaste(paste.id)}>
                <Trash size={16} />
              </button>
              <button className="icon-btn" onClick={() => setSelectedPaste(paste)}>
                <Eye size={16} />
              </button>
              <button className="icon-btn" onClick={() => handleCopy(paste.content)}>
                <Copy size={16} />
              </button>
            </div>

            <div className="meta">
              <Calendar size={14} />
              <span>{paste.date}</span>
              <span className="badge">CODE</span>
            </div>
          </div>
        </div>
      ))}

      <PasteModal
        paste={selectedPaste}
        onClose={() => setSelectedPaste(null)}
      />
    </>
  );
};

export default PasteList;
