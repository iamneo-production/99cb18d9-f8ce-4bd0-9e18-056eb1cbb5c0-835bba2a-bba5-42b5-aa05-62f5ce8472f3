import "./styles/productstatus.css";

export default function ProductStatus() {
  const sold = 35;
  const pen = 25;
  const nsold = 40;
  return (
    <>
      <div className="productstatus-wrapper">
        <div className="ps-content-1">
          <div className="ps-c-1-h-div">
            <h4>Products Status</h4>
            <p>{sold}% Sold</p>
          </div>
          <div className="ps-c-1-pie-content">
            <div className="ps-c-1-pie-c-c">
              <span
                style={{ "--customColor": "skyblue" }}
                class="material-symbols-outlined material-symbols-outlined-custom-color"
              >
                hdr_strong
              </span>
              Products Sold
            </div>
            <div className="ps-c-1-pie-c-c">
              <span
                style={{ "--customColor": "royalblue" }}
                class="material-symbols-outlined material-symbols-outlined-custom-color"
              >
                hdr_strong
              </span>
              Products Pending
            </div>
            <div className="ps-c-1-pie-c-c">
              <span
                style={{ "--customColor": "orange" }}
                class="material-symbols-outlined material-symbols-outlined-custom-color"
              >
                hdr_strong
              </span>
              Products Not-Sold
            </div>
          </div>
        </div>
        <div className="ps-content-2">
          <div
            style={{
              "--sold": `${sold}%`,
              "--pen": `${sold + pen}%`,
              "--nsold": `${pen + nsold}%`,
            }}
            className="ps-progressCycle"
          >
            <p>{sold}%</p>
          </div>
          <p>{sold}%</p>
        </div>
      </div>
    </>
  );
}
