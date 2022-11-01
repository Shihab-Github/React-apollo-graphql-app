import React from "react";
import { useReactiveVar } from "@apollo/client";
import { watchList } from "../../../client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function WatchList() {
  const favPoks = useReactiveVar(watchList);
  return (
    <Box p={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Favorite Pokemons</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favPoks.map((item) => (
              <TableRow key={item}>
                <TableCell component="th" scope="row">
                  {item}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
