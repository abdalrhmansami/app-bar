import CssBaseline from "@material-ui/core/CssBaseline";
import CustomAppBar from "./Appbar-content";
import MiniDrawer from "./MainDrawer";

import { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <CustomAppBar
        displayPrint="none"
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <MiniDrawer
        displayPrint="none"
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <CssBaseline />
    </div>
  );
};
export default Header;
