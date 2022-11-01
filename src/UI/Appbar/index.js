import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function PokemonAppBar() {
  const navigate = useNavigate();

  const navigateTo = (path) => navigate(path);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemons
          </Typography>
          <Box>
            <Button onClick={() => navigateTo('/')} sx={{ color: "#fff" }}>Pokemons</Button>
            <Button onClick={() => navigateTo('/favorites')} sx={{ color: "#fff" }}>Watch List</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
