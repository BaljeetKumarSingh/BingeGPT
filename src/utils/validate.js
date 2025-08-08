export const checkValidSignUp = (name, email, password) => {
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );

  if (!isNameValid) return "Invalid Name";
  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
export const checkValidSignIn = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
