import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Notes Manager</h1>

      <NoteForm onAddNote={addNote} />

      {loading && <Loader />}

      {!loading && notes.length === 0 && <EmptyState />}

      {!loading && notes.length > 0 && (
        <NoteList notes={notes} onDelete={deleteNote} />
      )}
    </div>
  );
}

export default App;
