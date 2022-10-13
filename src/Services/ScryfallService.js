const axios = require("axios").default;
export const getRandomCard = (resultCallback) => {
  const url = "https://api.scryfall.com/cards/random";
  axios
    .get(url)
    .then((result) => {
      resultCallback(JSON.parse(result.request.response));
    })
    .catch((error) => {
      console.log(error);
    });
};
