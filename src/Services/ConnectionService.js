export const signInUser = ({ email, password }) => {
  localStorage.setItem(email, password);
};

export const signUpUser = (
  { email, password },
  successCallback,
  failCallback
) => {
  if (localStorage.getItem(email) === password) {
    successCallback();
  } else {
    failCallback();
  }
};
