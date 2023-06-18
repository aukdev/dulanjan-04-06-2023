import { useState } from "react";
import register from "../libs/formHandle/registerForm";
import {
  confirmPassVal,
  passwordVal,
} from "../libs/validation/passwordValidation";
import { MyForm } from "../style/style";

const Home = () => {
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassError, setConfirmPasswordError] = useState(false);
  const [passErrMsg, setPassErrMsg] = useState("");
  const [ConfirmpassErrMsg, setConfirmPassErrMsg] = useState("");

  return (
    <div>
      <h1>My Form</h1>

      <MyForm onSubmit={register}>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="text" placeholder="Your phone number" />
        <input
          style={{
            border: passwordError ? "2px solid red" : "",
          }}
          type="password"
          placeholder="Your password"
          onChange={(e) => passwordVal(e, setPasswordError, setPassErrMsg)}
        />
        <p>{passErrMsg}</p>
        <input
          style={{
            border: confirmPassError ? "2px solid red" : "",
          }}
          type="password"
          placeholder="confirm password"
          onChange={(e) =>
            confirmPassVal(e, setConfirmPasswordError, setConfirmPassErrMsg)
          }
        />
        <p>{ConfirmpassErrMsg}</p>
        <button type="submit">Register</button>
      </MyForm>
    </div>
  );
};

export default Home;
