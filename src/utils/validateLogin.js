const validateLogin = (e, emailInput, passwordInput, setIsValidLogData, setIsLogged, navigate) => {
  e.preventDefault();
  if (emailInput === 'dev@dev.com' && passwordInput === 'developer') {
    setIsValidLogData(true);
    setIsLogged(true);
    sessionStorage.setItem("accessToken", "ulogovan je");
    navigate("/admin");
  }
};

export default validateLogin;
