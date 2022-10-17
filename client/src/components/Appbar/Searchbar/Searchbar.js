import * as React from "react";
import TextField from "@mui/material/TextField";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AnchorIcon from "@mui/icons-material/Anchor";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import {moviesGenre} from '../../../constants/genreId'
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  FormControl,
  OutlinedInput,
  value,
  handleChange,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", marginTop: "30" }}>
      <Grid container spacing={3} columns={16} marginTop={0}>
        <Grid xs={0.6}></Grid>
        <Grid xs={0.3}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            style={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid xs={3}></Grid>
        <Grid xs={11}>
          <Item>
            <FormControl
              fullWidth
              id="fullWidth"
              variant="outlined"
              size="small"
            >
              <OutlinedInput
                placeholder="Search"
                endAdornment={
                  <InputAdornment position="end">
                    <Avatar
                      sx={{
                        background: "#5579C6",
                        height: "35px",
                        width: "35px",
                      }}
                    >
                      <SearchIcon />
                    </Avatar>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Item>
        </Grid>
      </Grid>

      <Drawer
        style={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ background: "#7697A0" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <List style={{display:"flex",flexDirection:"column"}}>
          {console.log(moviesGenre)}
          {moviesGenre.map(e=>{
            return (
              <ListItemButton>
                <ListItem component={Link} to={`/${e.name}-${e.id}`}>
                <ListItemText style={{ color: "black" }} primary={e.name} />
                </ListItem>
              </ListItemButton>
            )
          })}

          {/* <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <AnchorIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="ACTION" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <AcUnitIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="THRILLER" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="ROMANCE" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="ADVENTURE" />
            </ListItem>
          </ListItemButton>

          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <ColorLensIcon />
              </ListItemIcon>
              <ListItemText style={{ color: "black" }} primary="DRAMA" />
            </ListItem>
          </ListItemButton> */}
        </List>
      </Drawer>
    </Box>
  );
}
