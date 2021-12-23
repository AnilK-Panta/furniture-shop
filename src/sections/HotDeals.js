import HotCard from "../components/HotCard";
import Fire from "../iconify/Fire";

export default function HotDeals() {
  return (
    <div
      className="wrapper d-flex"
      style={{
        padding: "100px 0",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          width: "300px",
        }}
      >
        <span
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#244D4D",
            fontFamily: "Google Sans",
            lineHeight: "0",
          }}
        >
          Hot
        </span>
        <div>
          <Fire />
        </div>
        <span
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#244D4D",
            fontFamily: "Google Sans",
            lineHeight: "0",
          }}
        >
          deals for you
        </span>
        <p
          style={{
            fontSize: "1rem",
            color: "#5F5F64",
            marginTop: "2rem",
          }}
        >
          Online shopping for retail sales direct to consumers
        </p>
      </div>
      <HotCard cardTitle="1.5% cashback" />
      <HotCard cardTitle="30-day terms" />
      <HotCard cardTitle="Save Money" />
    </div>
  );
}
