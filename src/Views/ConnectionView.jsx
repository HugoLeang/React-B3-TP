import { useState } from "react";
import Signin from "../Components/ConnectionComponents/Signin";
import Signup from "../Components/ConnectionComponents/Signup";

const ConnectionView = () => {
  const [formState, setFormState] = useState("Signup");

  const switchMode = () => {
    switch (formState) {
      case "Signup":
        setFormState("Signin");
        break;
      case "Signin":
        setFormState("Signup");
        break;
      default:
        setFormState("Signup");
        break;
    }
  };

  return (
    <>
      <div className="viewContainer">
        <div className="connectionContainer">
          <div>
            <h1 className="title">Magic the Gathering - Database</h1>
            {formState === "Signup" ? (
              <Signup switchFunction={switchMode} />
            ) : (
              <Signin switchFunction={switchMode} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectionView;
