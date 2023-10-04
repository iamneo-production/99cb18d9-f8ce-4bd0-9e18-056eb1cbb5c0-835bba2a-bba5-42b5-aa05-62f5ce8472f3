import { useState } from "react";
import "./style/headersearchbox.css";
export default function HeaderSearchBox() {
  const [searchVal, setSearchVal] = useState("");

  // subscribe to search
  function onSubmit(ev) {
    ev.preventDefault();
    // fetch results
    console.log("search ", searchVal);
  }
  return (
    <>
      <form onSubmit={onSubmit.bind(this)}>
        <div className="headersearchbox-wrapper">
          <div className="headersearchbox-input-wrapper">
            <input
              placeholder="Search for items"
              type="text"
              className="headersearchbox-input"
              onChange={(ev) => setSearchVal(ev.target.value)}
            />
          </div>
          {/* handle search */}
          <button type="submit">
            <span
              style={{ "--iconsize": "30px" }}
              className="material-symbols-outlined material-symbols-outlined-size-customized"
            >
              search
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
