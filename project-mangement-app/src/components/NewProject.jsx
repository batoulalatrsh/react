import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSaveProject() {
    const savedTitle = titleRef.current.value;
    const savedDescription = descriptionRef.current.value;
    const savedDate = dateRef.current.value;

    //Validation...
    if (
      savedTitle.trim() === "" ||
      savedDescription.trim() == "" ||
      savedDate.trim() === ""
    ) {
      //Show error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: savedTitle,
      description: savedDescription,
      dueDate: savedDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSaveProject}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label="title" type="text" />
          <Input ref={descriptionRef} label="description" textarea />
          <Input ref={dateRef} label="due date" type="date" />
        </div>
      </div>
    </>
  );
}
