import { Link } from "react-router-dom";
import CartIcon from "../iconify/CartIcon";
import { setProduct } from "../redux/action/productAction";

export default function ProductCard(props) {
  return (
    <div
      id="productCard"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "450px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F4F6F6",
          padding: "2.5rem 4rem",
          paddingRight: "0",
          height: "200px",
          width: "250px",
          position: "relative",
          zIndex: "-1",
        }}
      >
        <CartIcon />
        <span
          style={{
            fontSize: "1.5rem",
            color: "#3D3D3F",
          }}
        >
          {props.productName}
        </span>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              color: "#3D3D3F",
            }}
          >
            $35.00
          </span>

          <span
            style={{
              fontSize: "1rem",
              color: "#A9A7A6",
              textDecoration: "line-through",
            }}
          >
            $66.00
          </span>
        </div>
      </div>
      <img
        src={`./images/${props.productImage}`}
        alt="imshr 1"
        style={{
          zIndex: "1",
          marginTop: "-120px",
          width: "fit-content",
          transition: "margin-top",
          transitionDuration: "400ms",
        }}
      />
    </div>
  );
}
