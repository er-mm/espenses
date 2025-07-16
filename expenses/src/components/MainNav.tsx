import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./MainNav.scss";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Milk Expenses", path: "/milk-expenses" },
  { label: "Ration Expenses", path: "/ration-expenses" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const MainNav: React.FC = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Expenses Tracker
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            end={item.path === "/"}
            style={{ textDecoration: "none", margin: "0 8px" }}
          >
            <Button color="inherit">{item.label}</Button>
          </NavLink>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

export default MainNav;
