import "./styles/revenvestat.css";

export default function RevenueStat() {
  return (
    <>
      <div className="revenuestat-wrapper">
        <div className="dash-rs-heading">
          <h4>Revenue Statistics</h4>
        </div>
        <div className="dash-rs-content-div">
          <div className="dash-rs-content-graph">
            <div style={{ "--cH": "10px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "100px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "30px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "45px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "23px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "80px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "99px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "50px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "75px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "87px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "36px" }} className="dash-rs-bar"></div>
            <div style={{ "--cH": "88px" }} className="dash-rs-bar"></div>
          </div>
          <div className="dash-rs-txt-div">
            <p>
              <span
                style={{
                  "--iconSize": "20px",
                  "--customColor": "ghostwhite",
                }}
                class="material-symbols-outlined material-symbols-outlined-size-customized material-symbols-outlined-custom-color"
              >
                arrow_upward
              </span>
              $351
            </p>
            <p>This Month</p>
          </div>
        </div>
      </div>
    </>
  );
}
