import "../App.css";
import SearchBar from "../iconify/SearchBar";
import MoreItem from "../iconify/MoreItem";

export default function NavBar() {
  return (
    <div
      className="wrapper d-flex space-between"
      style={{
        padding: "1.5rem 0",
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "1.4rem",
          fontWeight: "bold",
          color: "#244D4D",
        }}
      >
        Furniture Shop
      </div>
      <ul className="navCatagory d-flex gap-2 no-list-style">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <div className="navEnd d-flex gap-2">
        <div className="navSearch">
          <SearchBar />
        </div>
        <div className="navHamburger">
          <MoreItem />
        </div>
      </div>
    </div>
  );
}
