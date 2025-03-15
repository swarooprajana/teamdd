import React, { useState } from "react";
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel, Avatar, Typography, Container, Tabs, Tab, Box, Card, CardContent, Switch, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate=useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "mounika@example.com",
      phone: "",
      dob: "",
      gender: ""
    }
  });
  const [profilePic, setProfilePic] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [notifications, setNotifications] = useState(true);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
  const [passwordError, setPasswordError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    if (!data.phone || !data.dob || !data.gender) {
      toast.error("Please fill out all required fields.");
      return;
    }
    toast.success("Profile saved successfully!");
    console.log("Profile Data:", { ...data, profilePic });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePasswordChange = () => {
    setOpenPasswordDialog(true);
  };

  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
    setPasswordError("");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handlePasswordInputChange = (event) => {
    setPasswords({ ...passwords, [event.target.name]: event.target.value });
  };

  const handleSavePassword = () => {
    if (passwords.current === passwords.new) {
      setPasswordError("New password cannot be the same as the current password.");
      return;
    }
    if (passwords.new !== passwords.confirm) {
      setPasswordError("New password and confirm password must match.");
      return;
    }

    toast.success("Password changed successfully!");
    handleClosePasswordDialog();
  };

  const handleDeleteAccount = () => {
    toast.success("Account has been deleted");
    navigate("/login");
  };
  return (
    <Box sx={{ minHeight: "100vh",  color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container maxWidth="sm" style={{ textAlign: "center", padding: "20px", background: "#fff", borderRadius: "10px" }}>
        <Typography variant="h4" gutterBottom>Mounika</Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered textColor="inherit" indicatorColor="secondary">
          <Tab label="Edit Profile" />
          <Tab label="Subscription" />
          <Tab label="Account Settings" />
        </Tabs>
        <Box mt={3}>
        {tabValue === 0 && (
            <>
              <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} id="profile-upload" />
              <label htmlFor="profile-upload">
                <Avatar src={profilePic} sx={{ width: 100, height: 100, margin: "auto", cursor: "pointer" }} />
              </label>
              <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "20px" }}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} label="Email" fullWidth margin="normal" disabled InputProps={{ style: { color: "black" } }} sx={{ input: { color: "black" }, label: { color: "black" } }} />
                  )}
                />
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } }}
                  render={({ field }) => (
                    <TextField {...field} label="Phone Number" fullWidth margin="normal" error={!!errors.phone} helperText={errors.phone?.message} InputProps={{ style: { color: "black" } }} sx={{ input: { color: "black" }, label: { color: "black" } }} />
                  )}
                />
                <Controller
                  name="dob"
                  control={control}
                  rules={{ required: "Date of birth is required" }}
                  render={({ field }) => (
                    <TextField {...field} type="date" label="Date of Birth" InputLabelProps={{ shrink: true, style: { color: "black" } }} fullWidth margin="normal" error={!!errors.dob} helperText={errors.dob?.message} InputProps={{ style: { color: "black" } }} />
                  )}
                />
                <FormLabel component="legend" style={{color:"black"}}>Gender</FormLabel>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <RadioGroup {...field} row>
                      <FormControlLabel value="male" control={<Radio sx={{ color: "black" }} />} label="Male" />
                      <FormControlLabel value="female" control={<Radio sx={{ color: "black" }} />} label="Female" />
                      <FormControlLabel value="other" control={<Radio sx={{ color: "black" }} />} label="Other" />
                    </RadioGroup>
                  )}
                />
                {errors.gender && <Typography color="error">{errors.gender.message}</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
                  Save Profile
                </Button>
              </form>
            </>
          )}
        {tabValue === 1 && (
            <Card sx={{ background: "#fff", color: "black", padding: "20px", borderRadius: "10px" }}>
              <CardContent>
                <Typography variant="h6">Current Subscription</Typography>
                <Typography variant="body1">Plan: Premium</Typography>
                <Typography variant="body1">Next Billing Date: April 10, 2025</Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "10px" }} onClick={() => navigate("/pay")}>
                  Manage Subscription
                </Button>
              </CardContent>
            </Card>
          )}
          {tabValue === 2 && (
            <Card sx={{ background: "white", color: "black", padding: "20px", borderRadius: "10px",  }}>
              <CardContent>
                <Typography variant="h6">Account Settings</Typography>
                <FormControlLabel
                  control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} sx={{ color: "white" }} />}
                  label="Enable Notifications"
                />
                <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "10px" }} onClick={handlePasswordChange}>
                  Change Password
                </Button>
                <Button variant="outlined" color="error" fullWidth sx={{ marginTop: "10px" }}  onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          )}
        </Box>
      </Container>
      <Dialog open={openPasswordDialog} onClose={handleClosePasswordDialog}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField label="Current Password" name="current" type="password" fullWidth margin="normal" onChange={handlePasswordInputChange} />
          <TextField label="New Password" name="new" type="password" fullWidth margin="normal" onChange={handlePasswordInputChange} />
          <TextField label="Confirm New Password" name="confirm" type="password" fullWidth margin="normal" onChange={handlePasswordInputChange} />
          {passwordError && <Typography color="error">{passwordError}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePasswordDialog} color="primary">Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSavePassword}>Save</Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </Box>
  );
};
        

export default ProfilePage;
