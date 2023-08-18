import {
  Card,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  Autocomplete,
  TextField,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { Javascript } from "@mui/icons-material";

function MuiCard() {
  const [open, setOpen] = useState(false);
  const [share, setShare] = useState(false);
  return (
    <Box width="400px" margin="100px auto" gridRow>
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124"
        ></CardMedia>
        <CardContent textAlign="justify">
          <Typography variant="h4">Learn React</Typography>
          <Typography variant="p" textAlign="justify">
            These are just some of the essential components offered by
            Material-UI. The library provides a wide range of other components
            and utilities to build comprehensive and visually appealing user
            interfaces.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            startIcon={<ShareIcon />}
            onClick={() => setShare(true)}
          >
            {" "}
            Share
          </Button>
          <Button
            variant="text"
            endIcon={<InfoIcon />}
            onClick={() => setOpen(true)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
      {/* Dialog for Delete */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are you Sure To Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Product Will Be Deleted Permanently
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* dialog For Share */}
      <Dialog open={share} onClose={() => setShare(false)}>
        <DialogTitle>Share Via Socail Media</DialogTitle>
        <DialogActions textAlign="center">
          <IconButton color="secondary" href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/">
            <InstagramIcon color="red" />
          </IconButton>
          <IconButton href="https://www.youtube.com/">
            <YouTubeIcon color="success" />
          </IconButton>
        </DialogActions>
        <DialogActions>
          <Button onClick={() => setShare(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default MuiCard;
