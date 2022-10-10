import { Button, TextField } from "@mui/material";
import Card from "@mui/material/card";
import "../ConnectionComponents/ConnectionComponent.css";
const Signup = (props) => {
  return (
    <>
      <Card className="formContainer">
        <h2>SIGNUP</h2>
        <TextField
          className="containerItem"
          id="outlined-required"
          required
          label="Email"
        />
        <TextField
          className="containerItem"
          id="outlined-password-input"
          required
          label="Password"
          type="password"
        />
        <Button className="containerItem" variant="contained">
          Signup
        </Button>
        <Button
          onClick={props.switchFunction}
          className="containerItem"
          variant="text"
        >
          Go Signin
        </Button>
      </Card>
    </>
  );
};

export default Signup;
