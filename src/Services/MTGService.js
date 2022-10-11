const axios = require("axios").default;

export const getRandomCard = (resultCallback) => {
  const url =
    "https://api.magicthegathering.io/v1/cards/" +
    parseInt(Math.random() * 3000);

  axios
    .get(url)
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
