import { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [touched, setTouched] = useState(false);

  const isTitleInvalid = touched && title.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    onAddNote({
      id: Date.now(),
      title,
      description,
    });

    // reset form
    setTitle("");
    setDescription("");
    setTouched(false);
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label className="label">Title</label>

      <input
        type="text"
        className={isTitleInvalid ? "input error-border" : "input"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={() => setTouched(true)}
      />

      {isTitleInvalid && (
        <div className="error-box">
          Error: Title cannot be empty.
        </div>
      )}

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        spellCheck="false"
      />

      <button type="submit" disabled={title.trim() === ""}>
        Submit
      </button>
    </form>
  );
}

export default NoteForm;
