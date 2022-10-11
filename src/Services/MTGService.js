const axios = require("axios").default;

let config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const getRandomCard = (resultCallback) => {
  console.log("Called");
  const url =
    "https://api.magicthegathering.io/v1/cards/" +
    parseInt(Math.random() * 3000);

  axios
    .get(url, config)
    .then((result) => {
      resultCallback(JSON.parse(result.request.response));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getLatestSets = () => {
  console.log("Call get latest sets");
};
