import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box, Card, CardContent, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formValues, setFormValues] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    phonePe: "",
    phonePeNumber: "",
    upi: "",
    amount: "",
    plan: "standard" // Set default plan
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const validateForm = () => {
    let tempErrors = {};
    if (paymentMethod === "card") {
      if (!formValues.cardNumber.match(/^[0-9]{16}$/)) tempErrors.cardNumber = "Invalid card number";
      if (!formValues.expiryDate) tempErrors.expiryDate = "Expiry date required";
      if (!formValues.cvv.match(/^[0-9]{3}$/)) tempErrors.cvv = "Invalid CVV";
    } else if (paymentMethod === "phonepe") {
      if (!formValues.phonePeNumber.match(/^[0-9]{10}$/)) tempErrors.phonePeNumber = "Invalid PhonePe number";
    } else if (paymentMethod === "upi" && !formValues.upi.match(/^[\w.-]+@[\w.-]+$/)) {
      tempErrors.upi = "Invalid UPI ID";
    }
    if (!formValues.amount || formValues.amount <= 0) tempErrors.amount = "Enter a valid amount";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePayment = () => {
    if (validateForm()) {
      setLoading(true); 
      toast.success("Payment Successful!");
      setTimeout(() => {
        navigate("/Imageslider");
      }, 2000); 
    } else {
      
      Object.values(errors).forEach((error) => {
        toast.error(error);
      });
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    let amount = 0;

    switch (selectedPlan) {
      case "basic":
        amount = 199;
        break;
      case "standard":
        amount = 399;
        break;
      case "premium":
        amount = 999;
        break;
      default:
        break;
    }

    setFormValues({
      ...formValues,
      plan: selectedPlan,
      amount: amount
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="sm" style={{ textAlign: "center", padding: "20px", background: "#fff", borderRadius: "10px" }}>
        <Typography variant="h4" gutterBottom>Payment</Typography>
        <Card sx={{ background: "#fff", color: "black", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
          <CardContent>
            <Typography variant="h6">Select Payment Method</Typography>
            <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <FormControlLabel value="card" control={<Radio />} label={<><CreditCardIcon /> Credit/Debit Card</>} />
              <FormControlLabel value="phonepe" control={<Radio />} label={<><PhoneIphoneIcon /> PhonePe</>} />
              <FormControlLabel value="upi" control={<Radio />} label={<><AccountBalanceWalletIcon /> UPI (Google Pay, Paytm)</>} />
            </RadioGroup>

            {/* Plan Dropdown */}
            <label className="fw-bold">Choose a plan</label>
            <FormControl fullWidth margin="normal">
              <Select
                name="plan"
                value={formValues.plan}
                onChange={handlePlanChange}
                error={!!errors.amount}
              >
                <MenuItem value="basic">₹199 - Basic Plan (Watch on 1 Device, SD)</MenuItem>
                <MenuItem value="standard">₹399 - Standard Plan (Watch on 2 Devices, HD)</MenuItem>
                <MenuItem value="premium">₹999 - Premium Plan (Watch on 4 Devices, Ad-Free, Multi-User)</MenuItem>
              </Select>
            </FormControl>

            {paymentMethod === "card" && (
              <>
                <TextField name="cardNumber" label="Card Number" fullWidth margin="normal" value={formValues.cardNumber} onChange={handleInputChange} error={!!errors.cardNumber} helperText={errors.cardNumber} />
                <TextField name="expiryDate" label="Expiry Date" type="month" fullWidth margin="normal" value={formValues.expiryDate} onChange={handleInputChange} error={!!errors.expiryDate} helperText={errors.expiryDate} />
                <TextField name="cvv" label="CVV" type="password" fullWidth margin="normal" value={formValues.cvv} onChange={handleInputChange} error={!!errors.cvv} helperText={errors.cvv} />
              </>
            )}
            {paymentMethod === "phonepe" && (
              <TextField name="phonePeNumber" label="PhonePe Number" fullWidth margin="normal" value={formValues.phonePeNumber} onChange={handleInputChange} error={!!errors.phonePeNumber} helperText={errors.phonePeNumber} />
            )}
            {paymentMethod === "upi" && (
              <TextField name="upi" label="UPI ID (Google Pay, Paytm, PhonePe)" fullWidth margin="normal" value={formValues.upi} onChange={handleInputChange} error={!!errors.upi} helperText={errors.upi} />
            )}

            <TextField name="amount" label="Enter Amount" type="number" fullWidth margin="normal" value={formValues.amount} onChange={handleInputChange} error={!!errors.amount} helperText={errors.amount} disabled />
            <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "10px" }} onClick={handlePayment} disabled={loading}>
              {loading ? "Processing..." : "Pay Now"}
            </Button>
          </CardContent>
        </Card>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default PaymentPage;
