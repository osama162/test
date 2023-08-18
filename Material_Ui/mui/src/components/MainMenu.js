import {
  AppBar,
  Button,
  Tab,
  Toolbar,
  Tabs,
  ButtonGroup,
  Icon,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import InfoIcon from "@mui/icons-material/Info";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
function MainMenu() {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs>
          <Tab label="" icon={<HomeIcon />} display="flex">
            {" "}
          </Tab>
          <Tab label="" icon={<InfoIcon />}></Tab>

          <Tab label="" icon={<ContactPageIcon />}></Tab>
          <Tab label="" icon={<LocalGroceryStoreIcon />}></Tab>
        </Tabs>
        <ButtonGroup sx={{ marginLeft: "auto" }}>
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "5px" }}
          >
            LOGIN
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ marginLeft: "5px" }}
          >
            SIGN UP
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
export default MainMenu;
