import "../App.css";
export default function NavBar() {
  return (
    <div className="wrapper d-flex space-between">
      <div className="logo">Furniture Shop</div>
      <ul className="navCatagory d-flex gap-1 no-list-style">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <div className="navEnd d-flex gap-1">
        <div className="navSearch">search</div>
        <div className="navHamburger">Hamburger</div>
      </div>
    </div>
  );
}
