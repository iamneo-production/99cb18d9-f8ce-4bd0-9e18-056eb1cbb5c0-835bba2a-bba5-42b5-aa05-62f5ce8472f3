import PageViews from "./DashComponents/PageViews";
import RevenueStat from "./DashComponents/RevenueStat";
import ProductStatus from "./DashComponents/ProductStatus";
import CountryBasedAna from "./DashComponents/CountryBasedAna";
import "./styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dash-wrapper">
        <div className="dash-contents">
          <div className="dash-header">
            <p>Dashboard</p>
          </div>
          <div className="dash-c dash-c-1">
            <PageViews />
            <RevenueStat />
            <ProductStatus />
          </div>
          <div className="dash-c dash-c-2">
            <CountryBasedAna />
          </div>
        </div>
      </div>
    </>
  );
}
