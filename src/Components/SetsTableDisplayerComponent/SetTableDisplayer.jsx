import { useEffect, useState } from "react";
import { getSetsData } from "../../Services/MTGService";
import "../SetsTableDisplayerComponent/SetTableDisplayer.css";
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const SetTableDisplayer = () => {
  const [extensionData, SetExtensionData] = useState([]);
  useEffect(() => {
    getSetsData(SetExtensionData);
  }, []);
  return (
    <Card className="tableContainer">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Block</TableCell>
              <TableCell align="left">Release Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {extensionData.map((data) => (
              <TableRow align="left" key={data.name}>
                <TableCell>{data.name}</TableCell>
                <TableCell align="left">{data.block}</TableCell>
                <TableCell align="left">{data.releaseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default SetTableDisplayer;
