import { Button, TextField } from "@mui/material";
import Card from "@mui/material/card";
import "../ConnectionComponents/ConnectionComponent.css";
const Signin = (props) => {
  return (
    <>
      <Card className="formContainer">
        <h2>SIGNIN</h2>
        <TextField
          className="containerItem"
          id="outlined-required"
          required
          label="Email"
        />
        <TextField
          className="containerItem"
          required
          label="Password"
          type="password"
        />
        <TextField
          className="containerItem"
          required
          label="Confirm Password"
          type="password"
        />
        <Button className="containerItem" variant="contained">
          Signin
        </Button>
        <Button
          onClick={props.switchFunction}
          className="containerItem"
          variant="text"
        >
          Go Signup
        </Button>
      </Card>
    </>
  );
};

export default Signin;
