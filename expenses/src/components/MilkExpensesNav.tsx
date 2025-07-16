import React, { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import CreateMilkExpense from "./milk/CreateMilkExpense";
import ViewMilkExpenses from "./milk/ViewMilkExpenses";
import UpdateMilkExpense from "./milk/UpdateMilkExpense";
import DeleteMilkExpense from "./milk/DeleteMilkExpense";
import "./MilkExpensesNav.scss";

const navItems = [
  { label: "Create Milk Expense", component: <CreateMilkExpense /> },
  { label: "View Expenses", component: <ViewMilkExpenses /> },
  { label: "Update Expense", component: <UpdateMilkExpense /> },
  { label: "Delete Expense", component: <DeleteMilkExpense /> },
];

const MilkExpensesNav: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box>
      <ButtonGroup variant="outlined" color="primary" sx={{ my: 2 }}>
        {navItems.map((item, idx) => (
          <Button
            key={item.label}
            onClick={() => setSelected(idx)}
            variant={selected === idx ? "contained" : "outlined"}
          >
            {item.label}
          </Button>
        ))}
      </ButtonGroup>
      <Box sx={{ mt: 2 }}>{navItems[selected].component}</Box>
    </Box>
  );
};

export default MilkExpensesNav;
