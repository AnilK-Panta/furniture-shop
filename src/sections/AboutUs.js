import AboutReason from "../components/AboutReason";

export default function AboutUs() {
  return (
    <div className="wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "500px",
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
            About Us
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#64717C",
              lineHeight: "2em",
              marginTop: "20px",
            }}
          >
            At Besnik Consultancy, we take pride in our values – service,
            integrity, and excellence.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#F4F6F6",
            boxShadow:
              "0px 100px 80px rgba(36, 77, 77, 0.1), 0px 64.8148px 46.8519px rgba(36, 77, 77, 0.0759259), 0px 38.5185px 25.4815px rgba(36, 77, 77, 0.0607407), 0px 20px 13px rgba(36, 77, 77, 0.05), 0px 8.14815px 6.51852px rgba(36, 77, 77, 0.0392593), 0px 1.85185px 3.14815px rgba(36, 77, 77, 0.0240741)",
            borderRadius: "5px",
            height: "fit-content",
          }}
        >
          <p
            style={{
              margin: "1rem 2rem",
              textAlign: "center",
              lineHeight: "100%",
            }}
          >
            Learn more
          </p>
        </div>
      </div>
      <div
        style={{
          margin: "70px 0",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "2rem 0",
          }}
        >
          <AboutReason
            number="1."
            reason="Who We Are "
            brief="You get a 2-week free trial to kick the Smarty tries. We want you to."
          />
          <AboutReason
            number="2."
            reason="What Do We Do "
            brief="You get a 2-week free trial to kick the Smarty tries. We want you to."
          />
          <AboutReason
            number="3."
            reason="How Do We Help "
            brief="You get a 2-week free trial to kick the Smarty tries. We want you to."
          />
          <AboutReason
            number="4."
            reason="Create Success Story "
            brief="You get a 2-week free trial to kick the Smarty tries. We want you to."
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "end",
              gap: "2rem",
            }}
          >
            <img
              src="./images/pic1.png"
              alt="about 1"
              style={{
                width: "90%",
                height: "auto",
                marginTop: "4rem",
              }}
            />
            <img
              src="./images/pic2.png"
              alt="about 1"
              style={{
                width: "90%",
              }}
            />
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "end",
              gap: "2rem",
            }}
          >
            <img
              src="./images/pic3.png"
              alt="about 1"
              style={{
                width: "90%",
                height: "auto",
              }}
            />
            <img
              src="./images/pic4.png"
              alt="about 1"
              style={{
                width: "90%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
