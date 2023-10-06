import { useEffect, useState } from "react";
import CardNote from "../components/fragments/CardNote";
import NewNote from "../components/fragments/NewNote";
import { getInitialData } from "../utils";
import Header from "../components/layouts/Header";
import SearchBar from "../components/fragments/SearchBar";

const Home = () => {
  const [notes, setNotes] = useState(getInitialData || []);
  const [filteredNotes, setFilteredNotes] = useState([]);

  const onSearchEventHandler = (event) => {
    const { filteredNotes } = handleSearchNotes(notes, event.target.value);
    setFilteredNotes(filteredNotes);
  };

  const handleSearchNotes = (notesData, searchParam) => {
    const filteredNotes = notesData.filter((note) =>
      note.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchParam.toLowerCase().replace(/\s+/g, "")),
    );

    return {
      filteredNotes,
    };
  };

  const handleDelete = (id) => {
    setFilteredNotes(filteredNotes.filter((note) => note.id !== id));
  };

  useEffect(() => {
    setFilteredNotes(getInitialData);
  }, []);

  return (
    <>
      <section className="mb-10 w-full">
        <NewNote setNewNote={setFilteredNotes} newNote={filteredNotes} />
      </section>
      <section className="flex w-full flex-col items-center py-2">
        <h2 className="text-2xl font-bold">My Notes</h2>
        <div className="divider mt-2"></div>
      </section>
      <div className="mb-10 flex w-full justify-center">
        <SearchBar handleSearch={onSearchEventHandler} />
      </div>
      {!filteredNotes.length ? (
        <div className="flex w-full justify-center">
          <h2 className="text-2xl font-bold">No Notes Found</h2>
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <section className="grid grid-cols-4 gap-4">
            {filteredNotes.map((note) => (
              <CardNote note={note} key={note.id} handleDelete={handleDelete} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
