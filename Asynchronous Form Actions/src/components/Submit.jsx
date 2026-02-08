//UseFormstate shouldn't implement inside the component that have the form instead inside any component inside the component that have the form
import { useFormStatus } from "react-dom";

export default function Submit({}) {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submit..." : "Submit"}
      </button>
    </p>
  );
}
