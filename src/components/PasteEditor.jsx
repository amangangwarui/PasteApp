import { useState } from "react";

const PasteEditor = ({ addPaste }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    if (!title || !content) return;

    addPaste({
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <>
      <input
        className="title-input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="editor-wrapper">
        <div className="editor-header">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>

        <textarea
          className="editor-textarea"
          placeholder="Write your paste here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={handleCreate}>
        Create My Paste
      </button>
    </>
  );
};

export default PasteEditor;
