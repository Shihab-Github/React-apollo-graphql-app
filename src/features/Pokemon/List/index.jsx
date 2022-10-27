import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";

import { GET_ALL_POKEMONS } from "../../../queries/getPokemons";

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const { data, fetchMore, updateQuery } = useQuery(GET_ALL_POKEMONS, {
    variables: {
      offset: 0,
      take: 10,
    },
  });

  const handlePageChange = (event, value) => {
    let newValue = 10 * (value - 1);
    fetchMore({
      variables: {
        offset: newValue,
        take: 10,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return fetchMoreResult;
      },
    });
    setPage(value);
  };

  const search = (e) => {
    let term = e.target.value;
    let filteredData = data.getAllPokemonSpecies.filter(
      (item) => item.toLowerCase().indexOf(term) > -1
    );
    console.log(filteredData);
    updateQuery((data) => ({
      getAllPokemonSpecies: filteredData,
    }));
  };

  return (
    <Box p={2}>
      <Box mb={1} display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5" gutterBottom>
            Pokemons
          </Typography>
        </Box>
        <Box>
          <TextField
            id="outlined-basic"
            variant="standard"
            label="Search pokemons"
            onChange={search}
          />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Pokemon Species</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!data ? (
              <TableRow>
                <TableCell align="center" component="th" scope="row">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {data.getAllPokemonSpecies.map((item) => (
                  <TableRow key={item}>
                    <TableCell component="th" scope="row">
                      {item}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
        <Box p={1} display="flex" justifyContent="flex-end">
          <Pagination
            count={15}
            color="primary"
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      </TableContainer>
      {/* <button onChange={search}>Search</button> */}
    </Box>
  );
}
