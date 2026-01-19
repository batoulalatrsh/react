export default function TabButton({ children, isSelected,...props }) {
  return (
    <li>
      {/*children is a default prop in jsx that refer to content betweent two
      tags */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
