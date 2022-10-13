import "../CardDisplayerComponent/CardDisplayer.css";
import { Card, Skeleton } from "@mui/material";
import { getRandomCard } from "../../Services/ScryfallService";
import { useEffect, useState } from "react";
const CardDisplayer = (props) => {
  const [cardState, SetCardState] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    if (props.cardData === undefined) {
      getRandomCard(handleData);
      SetIsLoading(true);
    } else {
      SetIsLoading(false);
      SetCardState(props.cardData);
    }
  }, [props.cardData]);

  const handleData = (result) => {
    SetCardState(result);
    SetIsLoading(false);
  };

  return (
    <>
      <div className="cardDisplayerContainer">
        <Card className="cardDataContainer">
          {!isLoading ? (
            <>
              <img
                className="cardImage"
                src={cardState.image_uris.normal}
                alt="Card art"
              />
              <div className="cardTextContainer">
                <h2>{cardState.name}</h2>
                <h3>{cardState.type_line}</h3>
                <hr className="solid" />
                <p className="cardDescription">{cardState.oracle_text}</p>
              </div>
            </>
          ) : (
            <>
              <Skeleton
                className="skeletonImage"
                variant="rectangular"
                width={250}
                heigth={500}
              ></Skeleton>
              <div className="cardTextContainer">
                <Skeleton className="skeletonTitle" width={300} />
                <Skeleton className="skeletonTitle" width={300} size={60} />
                <hr className="solid" />
                <Skeleton
                  className="skeletonText"
                  variant="rectangular"
                  width={270}
                  heigth={500}
                />
              </div>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default CardDisplayer;
