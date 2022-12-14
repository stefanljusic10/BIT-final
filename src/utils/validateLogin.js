const validateLogin = (
  e,
  emailInput,
  passwordInput,
  setIsValidLogData,
  setIsLogged,
  navigate
) => {
  e.preventDefault();
  fetch("http://localhost:3333/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: emailInput, password: passwordInput }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.accessToken) {
        setIsValidLogData(true);
        setIsLogged(true);
        sessionStorage.setItem("accessToken", res.accessToken);
        navigate("/admin");
      } else throw new Error({ message: "Greska" });
    })
    .catch((error) => {
      console.log(error.message);
      setIsValidLogData(false);
    });
};

export default validateLogin;
