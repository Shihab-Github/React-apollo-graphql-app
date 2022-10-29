import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Loader from "../../../UI/common/Loader";
import { GET_POKEMON_BY_SPECIES } from "../../../queries/getPokemons";

export default function PokemonDetails() {
  const params = useParams();

  const { data, loading } = useQuery(GET_POKEMON_BY_SPECIES, {
    variables: {
      pokemon: params.species.toLowerCase(),
    },
  });

  const renderBaseStats = () => {
    let stats = [];
    for (let key in data.getPokemon.baseStats) {
      if (key === "__typename") continue;
      stats.push(
        <ListItem>
          <ListItemText
            primary={`${key} : ${data.getPokemon.baseStats[key]}`}
          />
        </ListItem>
      );
    }
    return stats;
  };

  if (loading || !data) {
    return <Loader />;
  }

  return (
    <Box p={2}>
      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            {params.species}
          </Typography>
          <Divider />
          <Typography mt={1} variant="body1" gutterBottom>
            Leveling Rate:{" "}
            {data.getPokemon.levellingRate
              ? data.getPokemon.levellingRate
              : "N/A"}
          </Typography>
          <Typography mt={1} variant="body1" gutterBottom>
            Flavour Texts:{" "}
            {data.getPokemon.flavorTexts.length > 0
              ? data.getPokemon.flavorTexts.join(",")
              : "N/A"}
          </Typography>
          <Typography mt={1} variant="body1" gutterBottom>
            Types:{" "}
            {data.getPokemon.types.length > 0
              ? data.getPokemon.types.join(", ")
              : "N/A"}
          </Typography>
          <Typography mt={1} variant="body1" gutterBottom>
            BulbaPedia Page:{" "}
            {data.getPokemon.bulbapediaPage
              ? data.getPokemon.bulbapediaPage
              : "N/A"}
          </Typography>
          <Typography mt={1} variant="body1" gutterBottom>
            Gender: Male - ${data.getPokemon.gender.male}, Female - ${data.getPokemon.gender.female}
          </Typography>
          <Typography mt={1} variant="body1" gutterBottom>
            Stats:
          </Typography>
          <List sx={{ backgroundColor: "#f7f7f7" }}>{renderBaseStats()}</List>
        </Box>
      </Paper>
    </Box>
  );
}
