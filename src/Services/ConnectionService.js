export const signInUser = ({ email, password }) => {
  localStorage.setItem(email, password);
};

export const signUpUser = (
  { email, password },
  successCallback,
  failCallback
) => {
  const localStorageData = localStorage.getItem(email);
  if (localStorageData != null) {
    if (localStorage.getItem(email) === password) {
      successCallback();
    } else if (localStorage.getItem(email) !== password) {
      failCallback({ fail: true, reason: "Incorrect password" });
    }
  } else {
    failCallback({ fail: true, reason: "User not found" });
  }
};
