import { Paper } from "@mui/material";
import CardDisplayer from "../Components/CardDisplayerComponent/CardDisplayer";
import SetTableDisplayer from "../Components/SetsTableDisplayerComponent/SetTableDisplayer";
import "../App.css";
const DashboardView = () => {
  return (
    <div className="viewContainer">
      <h1>CARD OF THE DAY</h1>
      <CardDisplayer />
      <h1>LATEST SETS</h1>
      <SetTableDisplayer />
    </div>
  );
};

export default DashboardView;
