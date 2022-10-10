import "../CardDisplayerComponent/CardDisplayer.css";

const CardDisplayer = () => {
  return (
    <>
      <div className="cardDisplayerContainer">
        <h1>CARD OF THE DAY</h1>
        <div className="cardDataContainer">
          <img
            className="cardImage"
            src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409741&type=card"
          ></img>
          <h2>Archangel Avacyn</h2>
          <h3>Legendary Creature - Angel</h3>
        </div>
      </div>
    </>
  );
};

export default CardDisplayer;
