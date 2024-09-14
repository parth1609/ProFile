import * as React from "react";
import { Box, TextField } from "@mui/material";

const PersonalInfo = ({ setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box component="form" onChange={handleChange}>
      <TextField
        fullWidth
        margin="normal"
        name="fullName"
        label="Full Name"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        name="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        name="phone"
        label="Phone"
        variant="outlined"
      />
      <TextField
        fullWidth
        margin="normal"
        name="address"
        label="Address"
        variant="outlined"
        multiline
        rows={2}
      />
    </Box>
  );
};
export default PersonalInfo;
