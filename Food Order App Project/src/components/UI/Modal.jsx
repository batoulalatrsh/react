import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();
  //Here we use useEffect as we can NOT open the modal untill finsh rendering the component (Side effect)
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
