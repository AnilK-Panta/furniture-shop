import ArrowIcon from "../iconify/ArrowIcon";
import Circle from "../iconify/Circle";
import Ellipse from "../iconify/Ellipse";
import Icon1 from "../iconify/Icon1";
import Icon2 from "../iconify/Icon2";

export default function Testimonials() {
  return (
    <div
      className="wrapper d-flex column align-center"
      style={{
        backgroundColor: "#F4F6F6",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        padding: "5rem 0",
        marginTop: "4rem",
      }}
    >
      <Circle />
      <Icon1 />
      <h1
        style={{
          color: "#244D4D",
          fontSize: "3rem",
          width: "30%",
          textAlign: "center",
          fontFamily: "Google Sens",
          lineHeight: "1.2em",
        }}
      >
        What our happy client say
      </h1>
      <p
        style={{
          width: "37%",
          textAlign: "center",
          marginTop: "1.5em",
          color: "#3A4F65",
          fontSize: "1.1rem",
        }}
      >
        File storage made easy – including powerful features you won’t find
        anywhere else. Whether you’re.
      </p>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          gap: "3em",
        }}
      >
        <Ellipse />
        <Icon2 />
        <img
          src="./images/person1.png"
          alt="client"
          style={{
            width: "250px",
          }}
        />
        <div
          style={{
            width: "400px",
          }}
        >
          <span
            style={{
              color: "#244D4D",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            furniture shop
          </span>
          <p
            style={{
              color: "#5E7388",
              fontSize: "1.2rem",
              fontStyle: "italic",
              marginTop: "2em",
              marginBottom: "2.5em",
            }}
          >
            File storage made easy – including powerful features you won’t find
            anywhere else. Whether you’re.
          </p>
          <span
            style={{
              color: "#152137",
              fontSize: "1.3rem",
              fontFamily: "Roboto Condensed",
            }}
          >
            Larry Diamond
          </span>
          <p
            style={{
              color: "#647383",
              fontSize: ".9rem",
              marginTop: "6px",
            }}
          >
            Chief Executive Officer
          </p>
          <div
            style={{
              marginTop: "2em",
              display: "flex",
              gap: "1em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "white",
                width: "50px",
                height: "50px",
                border: "1px solid #DDEDF4",
              }}
            >
              <ArrowIcon rotate="rotate(0deg)" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                backgroundColor: "white",
                width: "50px",
                height: "50px",
                border: "1px solid #DDEDF4",
              }}
            >
              <ArrowIcon rotate="rotate(180deg)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
