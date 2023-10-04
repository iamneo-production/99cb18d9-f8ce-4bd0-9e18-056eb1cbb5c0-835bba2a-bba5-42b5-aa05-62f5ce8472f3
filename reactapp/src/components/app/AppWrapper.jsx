import { forwardRef, lazy, Suspense, useContext, useRef } from "react";
import HeaderWrapper from "../header/HeaderWrapper";
import ContextTag from "../utilityFiles/ContextTag";
import Loading from "../utilityFiles/Loading";
import FooterWrapper from "../footer/FooterWrapper";
import "./styles/appwrapper.css";
import AlertBox from "./alertbox/AlertBox";

const AppWrapper = forwardRef(({}, ref) => {
  const { route } = useContext(ContextTag);
  // to manage in and out of alert
  const alertController = useRef();
  return (
    <>
      <div className="app-wrapper">
        <HeaderWrapper ref={{ ref, alertController }} />
        <Suspense fallback={<Loading />}>
          {(() => {
            if (route === "/home/about") {
              const Page = lazy(() => import("./about/AboutWrapper"));
              return <Page />;
            } else {
              const Page = lazy(() => import("./home/HomeWrapper"));
              return <Page />;
            }
          })()}
        </Suspense>
        <FooterWrapper />
      </div>
      <AlertBox ref={alertController} />
    </>
  );
});

export default AppWrapper;
