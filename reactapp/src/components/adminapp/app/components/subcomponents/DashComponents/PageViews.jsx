import "./styles/pageview.css";

export default function PageViews() {
  return (
    <>
      <div className="dash-pv-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="visual"
          viewBox="0 0 400 200"
          width="400"
          height="200"
          version="1.1"
          className="pageview-graph"
        >
          <path
            d="M0 173L29 181L57 184L86 183L114 179L143 175L171 176L200 182L229 177L257 176L286 177L314 174L343 180L371 182L400 185L400 201L371 201L343 201L314 201L286 201L257 201L229 201L200 201L171 201L143 201L114 201L86 201L57 201L29 201L0 201Z"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
        <div className="dash-pv-content-div">
          <div className="dash-pv-c-heading">
            <h4>Page Views</h4>
          </div>
          <div className="dash-pv-c-c-div">
            <div className="dash-pv-c-c-1">
              <p>
                <span
                  style={{
                    "--iconSize": "20px",
                    "--customColor": "ghostwhite",
                  }}
                  class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
                >
                  arrow_upward
                </span>{" "}
                6550
              </p>
            </div>
            <div className="dash-pv-c-c-2">
              <ul>
                <li>
                  <span
                    style={{ "--customColor": "cyan" }}
                    class="material-symbols-outlined material-symbols-outlined-custom-color"
                  >
                    hdr_strong
                  </span>
                  Visit
                </li>
                <li>
                  <span class="material-symbols-outlined">hdr_strong</span>
                  Page Views
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
