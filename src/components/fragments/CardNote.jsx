import PropTypes from "prop-types";
import { PiArchiveBoxBold, PiTrashBold } from "react-icons/pi";
import { showFormattedDate } from "../../utils";

const CardNote = ({ note, handleDelete }) => {
  return (
    <article>
      <div className="card card-bordered card-compact h-72 w-60 bg-base-300 shadow-md shadow-black">
        <div className="card-body">
          <div className="card-title">
            <h2
              className="cursor-pointer text-lg font-bold"
              onClick={() => document.getElementById(note.id).showModal()}
            >
              {note.title}
            </h2>
          </div>
          <hr />
          <span className="text-xs">{showFormattedDate(note.createdAt)}</span>
          <p>
            {note.body.length > 140
              ? note.body.slice(0, 140) + " ..."
              : note.body}
          </p>
        </div>
        <div className="card-actions justify-between gap-0">
          <button
            className=" btn btn-error flex-1 rounded-none rounded-es-2xl"
            onClick={() => handleDelete(note.id)}
          >
            <PiTrashBold size={24} />
          </button>
          <button className=" btn btn-success flex-1 rounded-none rounded-ee-2xl">
            <PiArchiveBoxBold size={24} />
          </button>
        </div>
      </div>
      <dialog id={note.id} className="modal">
        <div className="modal-box">
          <h3 className="pb-2 text-xl font-bold">{note.title}</h3>
          <hr />
          <span className="text-sm">{showFormattedDate(note.createdAt)}</span>
          <p className="py-2">{note.body}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          {/* if there is a button in form, it will close the modal */}
          <button>Close</button>
        </form>
      </dialog>
    </article>
  );
};

CardNote.propTypes = {
  note: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default CardNote;
