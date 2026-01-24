import Input from "./Input";
import { useRef } from "react";
export default function NewProject({ onAdd }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSaveProject() {
    const savedTitle = titleRef.current.value;
    const savedDescription = descriptionRef.current.value;
    const savedDate = dateRef.current.value;

    //Validation...

    onAdd({
      title: savedTitle,
      description: savedDescription,
      dueDate: savedDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
