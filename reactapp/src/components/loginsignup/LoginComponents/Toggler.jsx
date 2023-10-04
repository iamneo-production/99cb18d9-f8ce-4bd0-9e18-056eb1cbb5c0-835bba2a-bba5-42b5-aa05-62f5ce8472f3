import { useEffect, useRef, useState } from "react";
import "./styles/toogler.css";

export default function Toggler({ toggler }) {
  // inputref
  const checkboxRef = useRef();
  const [pageState, setPS] = useState(false);

  useEffect(() => {
    // register checkbox event
    checkboxRef.current.addEventListener("change", (ev) => {
      toggler();
      setPS((pre) => !pre);
    });
  }, [toggler]);

  return (
    <>
      <div className="toggler-wrapper">
        <div className="toogler-heading">{pageState ? "@admin" : "@user"}</div>
        <div className="toggler-body">
          <div className="toggler-holder">
            <input ref={checkboxRef} type="checkbox" id="togglerCheckbox" />
            <label htmlFor="togglerCheckbox">
              <div className="toggler-switch">
                <div className="toggler-ball"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
