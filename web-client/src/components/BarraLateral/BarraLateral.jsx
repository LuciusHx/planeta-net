import "./BarraLateral.css";
import Logo from "../../components/Logo/Logo.jsx";

import hamburguer from "../../assets/icons/hamburguer.svg";
import lupa from "../../assets/icons/Lupa.svg";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";

export default function BarraLateral() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      PaperProps={{
        sx: {
          width: open ? 300 : 70,
          transition: "width 0.3s",
          overflowX: "hidden",
          background: "transparent",
          border: "none",
        },
      }}
    >
      <Box className="bar" sx={{ width: open ? 300 : 70 }}>
        <List>
          <ListItem className="list-head">
            {open && <Logo />}

            <Button
              className="btn-hamburguer"
              onClick={toggleDrawer}
              style={{ minWidth: 0 }}
            >
              <img src={hamburguer} width={26} />
            </Button>
          </ListItem>

          <Divider className="divider" />

          <ListItem className="list-item">
            <ListItemIcon>
              <img src={lupa} width={22} />
            </ListItemIcon>

            {open && (
              <input className="sidebar-input" placeholder="Buscar chats" />
            )}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
