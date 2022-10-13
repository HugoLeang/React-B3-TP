import { Paper } from "@mui/material";
import CardDisplayer from "../Components/CardDisplayerComponent/CardDisplayer";
import SetTableDisplayer from "../Components/SetsTableDisplayerComponent/SetTableDisplayer";
const DashboardView = () => {
  return (
    <>
      <Paper>
        <h1>CARD OF THE DAY</h1>
        <CardDisplayer />
        <h1>LATEST SETS</h1>
        <SetTableDisplayer />
      </Paper>
    </>
  );
};

export default DashboardView;
