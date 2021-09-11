import AppBarStyle from "./appbar.style";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import CategoryIcon from "@material-ui/icons/Category";
import Divider from "@material-ui/core/Divider";
import DomainIcon from "@material-ui/icons/Domain";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { LocalMall } from "@material-ui/icons";
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";
import LocationCityIcon from "@material-ui/icons/LocationCity";
// import React from "react";
// import Routers from "../../routes";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import ContactsIcon from "@material-ui/icons/Contacts";
import PeopleIcon from "@material-ui/icons/People";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import IconButton from "@material-ui/core/IconButton/IconButton";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const icons = [
  <HomeIcon />,
  <BorderAllIcon />,
  <LocalOfferIcon />,

  <LocalMall />,
  <StoreMallDirectoryIcon />,
  // <ContactsIcon />,
  <CategoryIcon />,
  <LocationCityIcon />,
  <DomainIcon />,
  <ShoppingCartIcon />,
  <LocalPharmacyIcon />,
  <PeopleIcon />,
  <AccountBalanceIcon />,
  // <BackupIcon />,
  // <UpdateIcon />,
];

const MiniDrawer: React.FC<any> = (
  // props
) => {
  const classes = AppBarStyle();

  return (
    <Drawer
      variant="permanent"
      // onClick={props.handleDrawerClose}
      className={clsx(classes.drawer, {
        // [classes.drawerOpen]: props.open,
        // [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          // [classes.drawerOpen]: props.open,
          // [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        {/* <IconButton onClick={props.handleDrawerClose}> */}
        {/* {theme.direction === "rtl" ? ( */}
        {/* // <ChevronRightIcon /> */}
        {/* ) : ( */}
        {/* <ChevronLeftIcon /> */}
        {/* // )} */}
        {/* </IconButton> */}
      </div>
      <Divider />
      <List>
        {/* {Routers.map((route, index) => (
          <Link
            key={index}
            className={classes.link}
            color="primary"
            to={route.path}
          >
            <ListItem button key={index}>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={route.text} />
            </ListItem>
          </Link>
        ))} */}
      </List>
    </Drawer>
  );
};
export default MiniDrawer;
