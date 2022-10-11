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
    .catch((error) => {
      console.log(error);
    });
};

export const getSetsData = (resultCallback) => {
  const url = "https://api.magicthegathering.io/v1/sets";
  axios
    .get(url)
    .then((result) => {
      let sortedData = JSON.parse(result.request.response).sets;
      sortedData = sortedData.filter(lessThanOneYear);
      let resultData = [];
      sortedData.forEach((element) => {
        let data = { name: "", releaseDate: "", block: "" };
        data.name = element.name;
        data.releaseDate = element.releaseDate;
        data.block = element.block;
        resultData.push(data);
      });
      //Return result sorted by
      resultCallback(
        resultData.sort((a, b) => {
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

const lessThanOneYear = (extensionData) => {
  let date = new Date();
  let dateToCheck = new Date(extensionData.releaseDate);
  date.setFullYear(date.getFullYear() - 1);

  return dateToCheck > date;
};
