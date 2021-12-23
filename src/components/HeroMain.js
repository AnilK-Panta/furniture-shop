import Dots from "../iconify/Dots";

export default function HeroMain() {
  return (
    <div className="wrapper d-flex flex-end p-relative">
      <div
        className="dotsWrap p-absolute"
        style={{
          top: "50%",
          left: "50px",
          zIndex: "100",
          transform: "translateY(-220%)",
        }}
      >
        <Dots />
      </div>

      <div
        className="heroContent p-absolute"
        style={{
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          maxWidth: "350px",
          padding: "50px 0px",
          paddingRight: "50px",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(50px)",
        }}
      >
        <span
          style={{
            fontFamily: "Google Sans",
            fontStyle: "normal",
            fontWeight: "900",
            fontSize: "3.1rem",
            lineHeight: "60px",
            color: "#244D4D",
          }}
        >
          We Help You Make Modern Interior
        </span>
        <p
          style={{
            color: "#5F5F64",
            fontSize: "1rem",
            lineHeight: "24px",
            marginTop: "17px",
            width: "90%",
          }}
        >
          We will help you to make an elegant and luxurious interior designed by
          professional interior designer.
        </p>
      </div>
      <div
        className="heroImage d-flex align-center"
        style={{
          width: "80%",
          maxHeight: "calc(100vh - 50px)",
          backgroundColor: "green",
          overflow: "hidden",
        }}
      >
        <img
          src="./images/hero.png"
          alt="furniture shop"
          style={{
            width: "100%",
          }}
        />
      </div>
      {/* <div className="navigator p-absolute" style={{ right: "-80px" }}>
        nav
      </div> */}
    </div>
  );
}
