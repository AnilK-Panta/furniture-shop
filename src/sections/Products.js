import ProductCard from "../components/ProductCard";
import Arrow from "../iconify/Arrow";

export default function Products() {
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
            style={{
              position: "relative",
              height: "24px",
              width: "34px",
              backgroundColor: "#E9E9E9",
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
        <ProductCard productName="Hand Base Lamp" productImage="product1.png" />
        <ProductCard productName="Vintage Chair" productImage="product2.png" />
        <ProductCard productName="Lamp Tool" productImage="product3.png" />
        <ProductCard productName="Stylish Chair" productImage="product4.png" />
        <ProductCard productName="Vintage Chair" productImage="product5.png" />
        <ProductCard
          productName="Stackable Chair"
          productImage="product6.png"
        />
      </div>
    </div>
  );
}
