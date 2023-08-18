import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const courses = ["Html", "css", "React", "JS", "Python"];
  //   console.log(courses);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Left Menu</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course) => {
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={course} />
            </ListItemButton>;
          })}
        </List>
      </Drawer>
    </>
  );
}
export default DrawerMenu;
