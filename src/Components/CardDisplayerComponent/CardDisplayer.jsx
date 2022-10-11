import "../CardDisplayerComponent/CardDisplayer.css";
import { Card, Skeleton } from "@mui/material";
import { getRandomCard } from "../../Services/MTGService";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
const CardDisplayer = () => {
  const [cardState, SetCardState] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    getRandomCard(handleData);
    SetIsLoading(true);
  }, []);

  const handleData = (result) => {
    SetCardState(result);
    SetIsLoading(false);
  };

  return (
    <>
      <div className="cardDisplayerContainer">
        <h1>CARD OF THE DAY</h1>
        <Card className="cardDataContainer">
          {!isLoading ? (
            <>
              <img
                className="cardImage"
                src={cardState.card.imageUrl}
                alt="Card of the day"
              />
              <div className="cardTextContainer">
                <h2>{cardState.card.name}</h2>
                <h3>{cardState.card.type}</h3>
                <hr className="solid" />
                <p className="cardDescription">{cardState.card.text}</p>
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
