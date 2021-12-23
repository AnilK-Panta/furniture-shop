export default function AboutReason(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
        width: "40%",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#244D4D",
          fontFamily: "Roboto Condensed",
        }}
      >
        {props.number}
      </h1>
      <span
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#244D4D",
          fontFamily: "Roboto Condensed",
        }}
      >
        {props.reason}
      </span>
      <p
        style={{
          fontSize: "1rem",
          color: "#64717C",
          fontFamily: "Roboto Condensed",
          lineHeight: "24px",
        }}
      >
        {props.brief}
      </p>
    </div>
  );
}
