import { AppBar, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import "../NavbarComponent/NavBar.css";
const NavBar = () => {
  const navigate = useNavigate();
  const [userCookie, SetCookie, RemoveCookie] = useCookies(["userCookie"]);
  const signoutHandler = () => {
    RemoveCookie("userCookie");
    navigate("/");
  };
  const dashboardHandler = () => {
    navigate("/dashboard");
  };
  return (
    <AppBar>
      <div className="navBar">
        <img
          className="navBarLogo"
          src="https://www.wellesleyfreelibrary.org/wp-content/uploads/2019/11/magic.png"
          alt="App art"
        />
        <Button
          className="navBarItem"
          variant="contained"
          onClick={dashboardHandler}
        >
          Dashboard
        </Button>
        <Button
          className="navBarItemSignout"
          variant="contained"
          color="error"
          onClick={signoutHandler}
        >
          Signout
        </Button>
      </div>
      <Outlet />
    </AppBar>
  );
};

export default NavBar;
