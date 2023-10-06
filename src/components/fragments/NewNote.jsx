import { useState } from "react";
import PropTypes from "prop-types";

const NewNote = ({ newNote, setNewNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const [maxChar, setMaxChar] = useState(50);

  const handleInputTitle = (e) => {
    setMaxChar(Math.max(0, 50 - e.target.value.length));
    setNote({
      ...note,
      title: e.target.value.slice(0, 50),
    });
  };

  const handleInputBody = (e) => {
    setNote({
      ...note,
      body: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now(),
      title: note.title,
      body: note.body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNewNote([data, ...newNote]);
    setNote({
      title: "",
      body: "",
    });
    setMaxChar(50);
  };

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h1 className="text-2xl font-bold ">Make a new note</h1>
      <div className="divider mt-2"></div>
      <form
        className="form-control w-full max-w-md gap-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="label">
            <span className="label-text"></span>
            <span className="label-text-alt">{maxChar} characters left</span>
          </label>
          <input
            type="text"
            placeholder="Your note title"
            className="input input-bordered w-full max-w-md"
            name="title"
            onChange={handleInputTitle}
            value={note.title}
            required
          />
        </div>
        <textarea
          type="text"
          placeholder="Your note body"
          className="input input-bordered h-56 w-full max-w-lg"
          name="body"
          onChange={handleInputBody}
          value={note.body}
          required
        />
        <button className="btn btn-primary w-full" type="submit">
          Add Note
        </button>
      </form>
    </div>
  );
};

NewNote.propTypes = {
  newNote: PropTypes.array,
  setNewNote: PropTypes.func,
};

export default NewNote;
