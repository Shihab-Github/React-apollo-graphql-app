import React, { useState } from "react";
import { useReactiveVar } from "@apollo/client";
import { watchList } from "../../../client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import IconButton from "@mui/material/IconButton";

export default function WatchList() {
  const favPoks = useReactiveVar(watchList);
  const [order, setOrder] = useState("asc");

  const remove = (species) => {
    let items = watchList();
    items = items.filter((x) => x !== species);
    watchList(items);
  };

  const orderBy = (ord) => {
    let items = [...watchList()];
    let result = [];
    if (ord === "desc") {
      result = items.sort();
    } else {
      result = items.reverse();
    }
    setOrder(ord);
    watchList(result);
  };

  return (
    <Box p={2}>
      <Box mb={1} display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5" gutterBottom>
            Favorite Pokemons
          </Typography>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Species</strong>
                {order === "asc" ? (
                  <IconButton
                    aria-label="delete"
                    onClick={() => orderBy("desc")}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => orderBy("asc")}
                  >
                    <ArrowUpwardIcon />
                  </IconButton>
                )}
              </TableCell>
              <TableCell component="th" align="right" scope="row">
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favPoks.length === 0 ? (
              <TableRow>
                <TableCell align="center" component="th" scope="row">
                  No items available
                </TableCell>
              </TableRow>
            ) : (
              <>
                {favPoks.map((item) => (
                  <TableRow key={item}>
                    <TableCell component="th" scope="row">
                      {item}
                    </TableCell>
                    <TableCell component="th" align="right" scope="row">
                      <Button onClick={() => remove(item)} color="error">
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
