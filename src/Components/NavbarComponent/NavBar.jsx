import { Button } from "@mui/material";
import "../NavbarComponent/NavBar.css";
const NavBar = () => {
  return (
    <div className="navBar">
      <img
        className="navBarLogo"
        src="https://www.wellesleyfreelibrary.org/wp-content/uploads/2019/11/magic.png"
        alt="Card Art"
      />
      <Button className="navBarItem" variant="contained">
        Dashboard
      </Button>
    </div>
  );
};

export default NavBar;
