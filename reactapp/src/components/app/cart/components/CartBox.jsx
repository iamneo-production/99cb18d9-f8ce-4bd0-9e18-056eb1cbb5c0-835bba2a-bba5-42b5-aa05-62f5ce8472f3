import MyLink from "../../../utilityFiles/RouterConfig/MyLink";
import "./styles/cartbox.css";

export default function CartBox({ toggleCart }) {
  const Total = 0;

  return (
    <>
      <div className="cartbox-wrapper">
        <div className="cartbox-header">
          <div>
            <h3>This is your bag</h3>
          </div>
          <div onClick={toggleCart.bind(this)}>
            <span
              style={{ "--iconsize": "22px" }}
              class="material-symbols-outlined material-symbols-outlined-size-customized"
            >
              close
            </span>
          </div>
        </div>
        <div className="cartbox-body">
          <div className="cartbox-prds">{/* products */}</div>
          <div className="cartbox-access-div">
            <div className="cartbox-a-div-contents">
              <span>Total</span>
              <span>${Total}</span>
            </div>
            <MyLink to={"/home"}>
              <button>Checkout</button>
            </MyLink>
          </div>
        </div>
      </div>
    </>
  );
}
