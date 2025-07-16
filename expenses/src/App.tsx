import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import MainNav from "./components/MainNav";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RationExpenses from "./components/RationExpenses";
import MilkExpensesNav from "./components/MilkExpensesNav";
import "./App.scss";

const App: React.FC = () => (
  <Router>
    <MainNav />
    <Container maxWidth="md" className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ration-expenses" element={<RationExpenses />} />
        <Route path="/milk-expenses" element={<MilkExpensesNav />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
