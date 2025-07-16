import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { addMilkExpense } from "../../api/milkExpenses";

const getToday = () => {
  const d = new Date();
  return d.toISOString().split("T")[0];
};

const CreateMilkExpense: React.FC = () => {
  const [date, setDate] = useState(getToday());
  const [milkLiters, setMilkLiters] = useState(2);
  const [price, setPrice] = useState(55);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await addMilkExpense({ date, milkLiters, price });
      setSuccess("Expense saved!");
      setDate(getToday());
      setMilkLiters(2);
      setPrice(55);
    } catch (err: any) {
      setError("Failed to save expense.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
    >
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Milk (Liters)"
        type="number"
        inputProps={{ step: "0.01", min: 0 }}
        value={milkLiters}
        onChange={(e) => setMilkLiters(Number(e.target.value))}
        required
      />
      <TextField
        label="Price per liter"
        type="number"
        inputProps={{ step: "0.01", min: 0 }}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
      >
        {loading ? "Saving..." : "Submit"}
      </Button>
      {success && <Box color="success.main">{success}</Box>}
      {error && <Box color="error.main">{error}</Box>}
    </Box>
  );
};

export default CreateMilkExpense;
