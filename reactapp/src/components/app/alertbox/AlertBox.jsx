import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./alertbox.css";

const AlertBox = forwardRef(({}, ref) => {
  const [message, setMessage] = useState("Warning");
  const alertRef = useRef();

  function toggleAlert(message) {
    setMessage(message);
    alertRef.current.classList.toggle("alertbox-in");
  }

  useImperativeHandle(ref, () => ({ toggleAlert }));

  return createPortal(
    <>
      <div ref={alertRef} className="alertbox-wrapper">
        <div className="alertbox-symbol">
          <span
            style={{ "--iconsize": "30px" }}
            class="material-symbols-outlined material-symbols-outlined-color material-symbols-outlined-size-customized"
          >
            warning
          </span>
        </div>
        <div className="alertbox-content">
          <span>{message}</span>
        </div>
        <div className="alertClose" onClick={toggleAlert.bind(this, "warning")}>
          <span
            style={{ "--iconsize": "20px" }}
            class="material-symbols-outlined material-symbols-outlined-size-customized"
          >
            close
          </span>
        </div>
      </div>
    </>,
    document.body
  );
});

export default AlertBox;
