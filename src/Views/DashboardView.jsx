import CardDisplayer from "../Components/CardDisplayerComponent/CardDisplayer";
import NavBar from "../Components/NavbarComponent/NavBar";
import SetTableDisplayer from "../Components/SetsTableDisplayerComponent/SetTableDisplayer";
const DashboardView = () => {
  return (
    <>
      <NavBar />
      <h1>CARD OF THE DAY</h1>
      <CardDisplayer />
      <h1>LATEST SETS</h1>
      <SetTableDisplayer />
    </>
  );
};

export default DashboardView;
