export default function HotCard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "220px",
      }}
    >
      <img
        src="./images/hotdealIcon.png"
        alt="hot cart"
        style={{
          height: "30px",
          width: "fit-content",
          flexGrow: "0",
        }}
      />
      <span
        style={{
          fontSize: "1.25rem",
          fontWeidth: "700",
          fontFamily: "Roboto",
        }}
      >
        {props.cardTitle}
      </span>
      <p
        style={{
          fontSize: "1rem",
          color: "#5F5F64",
          marginTop: "-1rem",
        }}
      >
        Online shopping for retail sales direct to consumers
      </p>
    </div>
  );
}
