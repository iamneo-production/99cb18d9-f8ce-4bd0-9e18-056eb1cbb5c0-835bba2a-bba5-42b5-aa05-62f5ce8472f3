import WorldMapIMG from "./asserts/worldmap.jpg";
import "./styles/countrybasedana.css";

const conData = [
  { name: "India", percent: 86, color: "royalblue", id: "0" },
  { name: "UK", percent: 60, color: "skyblue", id: "1" },
  { name: "USA", percent: 40, color: "rebeccapurple", id: "2" },
  { name: "China", percent: 20, color: "orange", id: "3" },
];

export default function CountryBasedAna() {
  return (
    <>
      <div className="coun-b-ana-wrapper">
        <div className="con-b-ana-img-wrapper">
          <img src={WorldMapIMG} alt="" className="con-b-ana-img" />
        </div>
        <div className="con-b-ana-stat-div">
          <div className="con-b-ana-stat-heading-div">
            <h4>Sellers By Countries</h4>
            <p>Country Based Analysis</p>
          </div>
          <div className="con-b-ana-stat-body">
            {conData.map((elem) => {
              return (
                <>
                  <LineStat
                    name={elem.name}
                    percent={elem.percent}
                    key={elem.id}
                    color={elem.color}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
function LineStat({ name, percent, color }) {
  return (
    <>
      <div className="linestat-wrapper">
        <div className="linestat-nameDiv">
          <h5>{name}</h5>
        </div>
        <div className="linestat-linediv">
          <span
            style={{ "--per": `${percent}%`, "--barColor": color }}
            className="linestat-line"
          ></span>
          <p className="linestat-p">{percent}%</p>
        </div>
      </div>
    </>
  );
}
