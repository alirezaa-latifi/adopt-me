import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // const elref = useRef(document.createElement("div"));
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
