export const handleValidate = (email, password, name, isLoginForm) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!emailRegex.test(email)) {
    return "Email is not valid";
  }
  if (!passwordRegex.test(password)) {
    return "Password is not valid";
  }
  if(!name && !isLoginForm){
    return 'Name is not valid'
  }
};
