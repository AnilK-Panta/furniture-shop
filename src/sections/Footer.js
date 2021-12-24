export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#244D4D",
        width: "100%",
        padding: "100px 0",
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "2.5rem",
              width: "45%",
              color: "white",
              fontFamily: "Roboto Condensed",
              letterSpacing: "0.04em",
              fontWeight: "400",
            }}
          >
            Start your business today for $0+ state fees.
          </span>
          <div
            style={{
              gap: "2rem",
              display: "flex",
            }}
          >
            <span
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: "#FCFBFF",
                borderRadius: "20px",
                height: "fit-content",
                fontFamily: "Roboto Condensed",
                letterSpacing: "0.04em",
                color: "#244D4D",
              }}
            >
              Get Started
            </span>
            <span
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: "#3A5F5F",
                borderRadius: "20px",
                height: "fit-content",
                fontFamily: "Roboto Condensed",
                letterSpacing: "0.04em",
                color: "white",
              }}
            >
              Contact Sales
            </span>
          </div>
        </div>
        <div
          className="wrapper"
          style={{
            border: "1px solid #FFFFFF",
            opacity: "0.1",
            margin: "80px 0",
          }}
        ></div>
        <div
          className="wrapper d-flex gap-1"
          style={{
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "25%",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              furniture shop
            </span>
            <p
              style={{
                fontSize: "1rem",
                color: "#EEEEEE",
                marginTop: "1em",
              }}
            >
              Optix seamlessly connects your members with the community,
              resources.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1em",
                marginTop: "2.5em",
                color: "white",
              }}
            >
              <i class="fab fa-facebook-f " />
              <i class="fab fa-twitter " />
              <i class="fab fa-linkedin-in " />
              <i class="fab fa-pinterest " />
            </div>
          </div>
          <ul className="footerList">
            Entity types
            <li>Knowledge base</li>
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Partners</li>
            <li>About us</li>
            <li>FAQs</li>
          </ul>
          <ul className="footerList">
            Services
            <li>Contact Us</li>
            <li>Press</li>
            <li>Payrool</li>
            <li>Library</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
          <ul className="footerList">
            Resources
            <li>Pricing</li>
            <li>FAQs</li>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
          <ul className="footerList">
            Support
            <li>Contact</li>
            <li>Affiliates</li>
            <li>Sitemap</li>
            <li>Cancelation Policy</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
