import {
  Stack,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PublicIcon from "@mui/icons-material/Public";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
function MuiTextField() {
  const [value, setvalue] = useState("");
  const [select, setSelect] = useState("");

  return (
    <Stack spacing={4} margin="100px auto" width="800px">
      <Typography variant="h5" textAlign="center">
        Form In MUI
      </Typography>
      <Stack direction="row" spacing={8} textAlign="center">
        <TextField
          variant="standard"
          color="success"
          label="First Name"
          onChange={(e) => {
            setvalue(e.target.value);
          }}
          error={!value}
          helperText={!value ? "Name Is Required" : ""}
        ></TextField>
        <TextField
          variant="standard"
          color="success"
          label="Middle Name"
        ></TextField>
        <TextField
          variant="standard"
          color="success"
          label="Last Name"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={4} textAlign="center">
        <TextField
          variant="standard"
          color="success"
          label="Email Adrress"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          variant="standard"
          color="success"
          label="Contact Number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CallIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Box>
          <TextField
            select
            value={select}
            label="Select Country"
            onChange={(e) => {
              setSelect(e.target.value);
              console.log(e.target.value);
            }}
            variant="standard"
            color="success"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PublicIcon />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="PK">Pakistan</MenuItem>
            <MenuItem value="Ind">India</MenuItem>
            <MenuItem value="Ban">Bangladesh</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Stack direction="row" spacing={4} textAlign="center">
        <TextField
          type="password"
          variant="standard"
          color="success"
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RemoveRedEyeIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          type="password"
          variant="standard"
          color="success"
          label="Confirm Passowrd"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RemoveRedEyeIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
}
export default MuiTextField;
