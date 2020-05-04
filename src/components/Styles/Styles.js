import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  appBar: {
    // zIndex: theme.zIndex.drawerPaper + 1,
    position: "relative",
  },
  toolbar: {
    height: "75px",
    // width: `calc(100% - ${drawerWidth}px)`,
  },
  leftGrid: {
    float: "left",
    marginLeft: "0%",
    marginRight: "2%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  rightGrid: {
    float: "right",
    marginRight: "0%",
    margin: "auto",
  },
  button: {
    background: "none",

    "&:hover": {
      border: "0.2px solid white",
      background: "none",
    },
  },
  iconButton: {
    background: "none",
    borderSizing: "border-box",

    "&:hover": {
      border: "1px solid white",
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    zIndex: 0,
    width: drawerWidth,
    fontSize: "1.2rem",
    // height: `calc(100% - 75px)`,
  },
  paginationContainer: {
    display: "inline-flex",
  },
  checkoutButton: {
    border: "solid 1px #66bb6a",
    background: "#fff",
    "&:hover": {
      border: "solid 1px #fff",
      background: "#66bb6a",
    },
  },
  clearCartButton: {
    border: "solid 1px #f44336",
    background: "#fff",
    "&:hover": {
      border: "solid 1px #fff",
      background: "#f44336",
    },
  },
  addToCartButton: {
    border: "solid 1px #66bb6a",
    background: "#fff",
    "&:hover": {
      border: "solid 1px #fff",
      background: "#66bb6a",
    },
  },
  wishButton: {
    border: "solid 1px #d50000",
    background: "#fff",
    "&:hover": {
      border: "solid 1px #fff",
      background: "#d50000",
    },
    "&:focus": {
      border: "solid 1px #fff",
      background: "#d50000",
    },
  },
  // ORDER MODAL
  modalContainer: {
    textAlign: "center",
    margin: "auto",
    paddingTop: "50px",
  },
  modalTableContainer: {
    width: "40%",
    height: "40%",
    backgroundColor: "#fff",
    textAlign: "center",
    margin: "auto",
    border: "solid 1px #000",
    boxShadow: theme.shadows[5],
  },
  modalTableHeader: {
    width: "100%",
    height: "120px",
    background: "#D3D3D3",
    border: "solid 1px #D3D3D3",
  },
  // PROFILE
  profileCard: {
    width: "50%",
    textAlign: "center",
    margin: "auto",
    background: "#fff",
    border: "solid 1px #D3D3D3",
    marginTop: "50px",
  },
  profileHeader: {
    display: "inline-block",
    background: "#D3D3D3",
    border: "#D3D3D3",
    width: "100%",
    height: "200px",
  },
  profileAvatar: {
    margin: "auto",
  },
  // Multi use elements
  tableHeader: {
    width: "100%",
    height: "120px",
    backgroundColor: "#D3D3D3",
  },
  tableContainer: {
    width: "60%",
    height: "100%",
    margin: "auto",
    border: "solid 2px #D3D3D3",
  },
}));

export default useStyles;
