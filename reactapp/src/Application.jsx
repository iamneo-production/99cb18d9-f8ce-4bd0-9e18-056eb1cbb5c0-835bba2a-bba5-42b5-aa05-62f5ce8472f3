import { lazy, Suspense, useState, useRef } from "react";
import ContextTag from "./components/utilityFiles/ContextTag";
import usePopState from "./components/utilityFiles/customhooks/usePopState";
import Loading from "./components/utilityFiles/Loading";
import CartWrapper from "./components/app/cart/CartWrapper";

export default function Application() {
  // router config
  const [route, setRoute] = useState(window.location.pathname);
  // forward backward trigger
  usePopState(setRoute);
  // route configs
  const allHomeMatch = /\/home.*/;
  const allProfileMatch = /\/profile.*/;
  const allAdminMatch = /\/admin.*/;

  // carttoogler
  const cartHolderRef = useRef();

  return (
    <>
      <ContextTag.Provider value={{ setRoute, route }}>
        <Suspense fallback={<Loading />}>
          {(() => {
            if (route.match(allHomeMatch)) {
              const Page = lazy(() => import("./components/app/AppWrapper"));
              return (
                <>
                  <Page ref={cartHolderRef} />
                </>
              );
            } else if (route.match(allAdminMatch)) {
              const Page = lazy(() =>
                import("./components/adminapp/AdminAppWrapper")
              );
              return (
                <>
                  <Page />
                </>
              );
            } else if (route.match(allProfileMatch)) {
              const Page = lazy(() =>
                import("./components/app/userpage/Profile")
              );
              return (
                <>
                  <Page ref={cartHolderRef} />
                </>
              );
            } else {
              const Page = lazy(() =>
                import("./components/loginsignup/LoginSignup")
              );
              return (
                <>
                  <Page />
                </>
              );
            }
          })()}
        </Suspense>
        <CartWrapper ref={cartHolderRef} />
      </ContextTag.Provider>
    </>
  );
}
