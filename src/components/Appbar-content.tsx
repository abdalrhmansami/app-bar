import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import React, { useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import AppBarStyle from "./appbar.style";
// import { AuthContext } from "../../shared/context/auth-context";
import { withRouter } from "react-router-dom";

const CustomAppBar = (props: any) => {
  const classes = AppBarStyle();
  // const auth = useContext(AuthContext);
  const logout = () => {
    // auth.logout();
    props.history.push("/login");
  };

  return (
    <AppBar
      position="fixed"
    // className={clsx(classes.appBar, {
    // [classes.appBarShift]: props.open,
    // })}
    >
      <Toolbar className={clsx(classes.toolbar)}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        {/** and this inline style */}
        <Typography variant="h6" noWrap style={{ marginLeft: '20px' }}>
          Falaq
        </Typography>
        <IconButton
          // This change only I do 
          style={{ backgroundColor: 'white', borderRadius: '12px', fontSize: '16px', padding: '10px 20px', marginRight: '20px', boxShadow: '5px 5px 10px rgb(133, 133, 133)' }}
          color="secondary"
          aria-label="logout"
          onClick={logout}
          edge="end"
        >
          Logout
          {/* <ExitToAppIcon /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default CustomAppBar;
