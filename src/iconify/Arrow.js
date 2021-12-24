export default function Arrow() {
  return (
    <div
      id="allproductArrow"
      style={{
        position: "absolute",
        left: "-10px",
        top: "50%",
        transform: "translateY(-45%)",
        transition: "left",
        transitionDuration: "300ms",
      }}
    >
      <svg
        width="26"
        height="17"
        viewBox="0 0 26 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 8.5H24.5M24.5 8.5L17.5 1.5M24.5 8.5L17.5 15.5"
          stroke="#244D4D"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
}
