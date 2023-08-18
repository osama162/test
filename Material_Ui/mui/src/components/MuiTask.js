import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  MenuItem,
} from "@mui/material";

function MuiTask() {
  return (
    <Stack>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Form Task In Mui
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        sx={{ margin: "10px auto", width: "400px" }}
      >
        <TextField width="200px" type="text" label="First Name"></TextField>
        <TextField type="text" label="Last Name"></TextField>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ margin: "10px auto", width: "400px" }}
      >
        <TextField width="200px" type="email" label="Email"></TextField>
        <TextField type="phone" label="Phone Number"></TextField>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ margin: "10px auto", width: "400px" }}
      >
        <TextField width="200px" type="password" label="Email"></TextField>
        <TextField select label="Select Country" width="200px">
          <MenuItem value="IND">India</MenuItem>
          <MenuItem value="PAk">Pakistan</MenuItem>
          <MenuItem value="SRI">Srilanka</MenuItem>
        </TextField>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ margin: "10px auto", width: "400px" }}
      >
        <FormControl>
          <FormLabel>Select Your Gender</FormLabel>
          <RadioGroup>
            <FormControlLabel control={<Radio />} label="Male" value="male " />
            <FormControlLabel
              control={<Radio />}
              label="Female"
              value="Female "
            />
          </RadioGroup>
        </FormControl>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ margin: "10px auto", width: "400px" }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="I have Accept the terms and condition"
          value="I have Accept the terms and condition "
        />
      </Stack>
    </Stack>
  );
}
export default MuiTask;
