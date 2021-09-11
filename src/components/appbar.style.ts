import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const AppBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "@media print": {
        display: "none !important",
        header: {
          visibility: "hidden",
        },
      },
      display: "flex",
    },
    appBar: {
      "@media print": {
        display: "none !important",
      },
      zIndex: theme.zIndex.drawer + 1,
      position: "relative",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "flex",
      justifyContent: "space-around",
    },
    appBarShift: {
      "@media print": {
        display: "none !important",
      },
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      display: "flex",
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      // "@media (max-width:600px)": {
      //   width: 40,
      // },
      "@media print": {
        display: "none !important",
      },
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      whiteSpace: "nowrap",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
export default AppBarStyle;
