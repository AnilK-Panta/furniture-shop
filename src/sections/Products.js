import { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Arrow from "../iconify/Arrow";
import { ProductDetail } from "../apis/ProductDetail";

export default function Products() {
  const products = useSelector((state) => state.allProducts.products);
  // const [detail, setdetail] = useState(ProductDetail);
  console.log("this is product", products);

  return (
    <div className="wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontFaily: "Google Sans",
            fontSize: "3rem",
            fontWeight: "700",
            color: "#244D4D",
            fontFamily: "Google Sans",
          }}
        >
          Products
        </h1>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#3D3D3F",
              fontSize: "1rem",
              fontFamily: "Roboto Condensed",
            }}
          >
            See All
          </span>
          <div
            id="allProducts"
            style={{
              position: "relative",
              height: "24px",
              width: "34px",
              backgroundColor: "#E9E9E9",
              cursor: "pointer",
            }}
          >
            <Arrow />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "4rem",
            listStyle: "none",
            marginTop: "3rem",
          }}
        >
          <li className="activeToggle">All</li>
          <li className="nonActive">Bed</li>
          <li className="nonActive">Sofa</li>
          <li className="nonActive">Chair</li>
          <li className="nonActive">Light</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "4rem",
          gap: "3rem",
        }}
      >
        {products.map((curElem) => {
          const { id, name, image } = curElem;
          return (
            <ProductCard key={id} productName={name} productImage={image} />
          );
        })}
      </div>
    </div>
  );
}
