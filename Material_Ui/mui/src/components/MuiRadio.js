import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";
function MuiRadio() {
  //   console.log(value);
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);
  console.log(check);
  //   console.log(value);
  function handlechange(e) {
    return setValue(e.target.value);
  }
  function handleChecked(e) {
    return setCheck(e.target.checked);
  }

  return (
    <Box margin="200px">
      <FormControl>
        <FormLabel id="Years-of-exp">Years Of Experience</FormLabel>
        <RadioGroup
          aria-labelledby="Years-of-exp"
          value={value}
          onChange={handlechange}
        >
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="success" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="warning" />}
            label="6-8"
            value="6-8"
          />
        </RadioGroup>
      </FormControl>
      <FormControlLabel
        control={<Checkbox checked={check} onChange={handleChecked} />}
        label="Accecpt Our terms And Condition"
      />
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={check}
          onChange={handleChecked}
        />
      </Box>
    </Box>
  );
}
export default MuiRadio;
