import namestore from "../../header/headerReducer/namestore";
import { setName } from "../../header/headerReducer/headerreducer";

const adminMatch = /.*@admin/;

export default function AdminLogin({ customNavigation }) {
  function onSubmit(event) {
    event.preventDefault();
    // deletable
    const userName = event.target[0].value;
    namestore.dispatch(setName(userName));
    if (userName.match(adminMatch)) customNavigation("/admin");
  }
  return (
    <>
      <div className="l-s-inputgetter-div">
        <div className="l-s-ig-h-div">
          <h2>Welcome Admin!</h2>
          <p>Login to manage sellers and products</p>
        </div>
        <form className="l-s-form" onSubmit={onSubmit.bind(this)}>
          <div className="l-s-inputwrapper">
            <span className="material-symbols-outlined">person</span>
            <div className="l-s-input-holder">
              <input type="text" placeholder="Admin Id" />
            </div>
          </div>
          <div className="l-s-inputwrapper">
            <span className="material-symbols-outlined">lock</span>
            <div className="l-s-input-holder">
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="l-s-inputsubmit-wrapper">
            <input type="submit" value="Login" />
          </div>
        </form>
        {/*  */}

        {/*  */}
      </div>
    </>
  );
}
