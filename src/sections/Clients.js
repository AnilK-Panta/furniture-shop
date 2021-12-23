export default function Clients() {
  return (
    <div
      className="d-flex column align-center gap-2"
      style={{
        width: "100%",
        padding: "55px 0",
        backgroundColor: "#F4F6F6",
        marginTop: "60px",
      }}
    >
      <span
        style={{
          fontWeight: "500",
          fontSize: "1.5rem",
          color: "#031745",
          fontFamily: "Roboto Condensed",
          letterSpacing: "0.14em",
        }}
      >
        TRUSTED BY OVER 1K+ COMPANIES
      </span>
      <div className="d-flex gap-4 align-center">
        <img
          src="./images/client1.png"
          alt="client 1"
          style={{
            weidth: "100%",
            height: "100%",
          }}
        />
        <img
          src="./images/client2.png"
          alt="client 2"
          style={{
            weidth: "100%",
            height: "100%",
          }}
        />
        <img
          src="./images/client3.png"
          alt="client 3"
          style={{
            weidth: "100%",
            height: "100%",
          }}
        />
        <img
          src="./images/client4.png"
          alt="client 4"
          style={{
            weidth: "100%",
            height: "100%",
          }}
        />
        <img
          src="./images/client5.png"
          alt="client 5"
          style={{
            weidth: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
