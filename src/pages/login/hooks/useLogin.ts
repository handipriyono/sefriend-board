import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [hasClicked, setHasClicked] = useState(false);
  const navigate = useNavigate();

  const onChangePassword = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPass(e?.target?.value);
    if (hasClicked) {
      if (e.target.value.length < 8) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
      }
    }
  };

  const onChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e?.target?.value);
    if (hasClicked) {
      if (e.target.value.length) {
        setErrorEmail(false);
      } else {
        setErrorEmail(true);
      }
    }
  };

  const onSubmit = () => {
    setHasClicked(true);
    setErrorEmail(email?.length ? false : true);
    setErrorPassword(pass?.length < 8 ? true : false);
    if (email.length && pass.length >= 8) {
      const user = {
        id: 1,
        name: "Guest",
        isAdmin: false,
      };
      if (email === "admin@gmail.com") {
        user.name = "Admin";
        user.isAdmin = true;
      }
      localStorage.setItem("dataUser", JSON.stringify(user));
      return navigate("/dashboard", { replace: true });
    }
  };

  return {
    onSubmit,
    errorEmail,
    pass,
    email,
    errorPassword,
    onChangeEmail,
    onChangePassword,
  };
}
