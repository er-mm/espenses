import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getMilkExpenses, MilkExpense } from "../../api/milkExpenses";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getCurrentMonth = () => new Date().getMonth();
const getCurrentYear = () => new Date().getFullYear();

const ViewMilkExpenses: React.FC = () => {
  const [month, setMonth] = useState(getCurrentMonth());
  const [year, setYear] = useState(getCurrentYear());
  const [expenses, setExpenses] = useState<MilkExpense[]>([]);
  const [loading, setLoading] = useState(false);
  const [years, setYears] = useState<number[]>([getCurrentYear()]);

  useEffect(() => {
    setLoading(true);
    getMilkExpenses(month, year)
      .then((data) => {
        // Ensure each expense has all required properties
        const validExpenses = data.filter(
          (e: any) =>
            e.id !== undefined &&
            e.date !== undefined &&
            e.milkLiters !== undefined &&
            e.price !== undefined
        ) as MilkExpense[];
        setExpenses(validExpenses);
        // Update years dropdown based on fetched data
        const allYears = Array.from(
          new Set(
            validExpenses
              .map((e) => new Date(e.date).getFullYear())
              .concat([getCurrentYear()])
          )
        );
        setYears(allYears.sort((a, b) => b - a));
      })
      .finally(() => setLoading(false));
  }, [month, year]);

  const totalMilk = expenses.reduce((sum, e) => sum + e.milkLiters, 0);
  const totalPrice = expenses.reduce(
    (sum, e) => sum + e.milkLiters * e.price,
    0
  );

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl>
          <InputLabel id="month-label">Month</InputLabel>
          <Select
            labelId="month-label"
            value={month}
            label="Month"
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {months.map((m, idx) => (
              <MenuItem key={m} value={idx}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="year-label">Year</InputLabel>
          <Select
            labelId="year-label"
            value={year}
            label="Year"
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {years.map((y) => (
              <MenuItem key={y} value={y}>
                {y}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Milk (Liters)</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses.map((row, idx) => (
                <TableRow key={row.id || idx}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell align="right">{row.milkLiters}</TableCell>
                  <TableCell align="right">
                    {(row.milkLiters * row.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <Typography fontWeight="bold">Total</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">
                    {totalMilk.toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight="bold">
                    {totalPrice.toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ViewMilkExpenses;
