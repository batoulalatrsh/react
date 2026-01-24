import Button from "./Button";
export default function Sidebar({ onClicked }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <Button onClick={onClicked}>+ Add Project</Button>
    </aside>
  );
}
