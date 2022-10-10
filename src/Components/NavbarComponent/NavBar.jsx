import { Container } from "@mui/material";
import { Button } from "@mui/material";
import "../NavbarComponent/NavBar.css";
const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <img
          className="navBarLogo"
          src="https://www.wellesleyfreelibrary.org/wp-content/uploads/2019/11/magic.png"
        />
        <Button className="navBarItem" variant="text">
          Dashboard
        </Button>
        <Button className="navBarItem" variant="text">
          Research
        </Button>
        <Button className="navBarItem" variant="text">
          Decks
        </Button>
      </div>
    </>
  );
};

export default NavBar;
