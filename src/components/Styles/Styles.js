import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // APP
  root: {
    // width: "100%",
    height: '100%',
    textAlign: 'center',
    margin: '0',
  },
  content: {
    minHeight: '100%',
    margin: '0 auto -200px',
  },
  contentSecond: {
    height: '200px',
  },
  contentPush: {
    height: '200px',
  },
  // contentOutline: {
  //   minHeight: "100%",
  // },
  // HEADER
  appBar: {
    // zIndex: theme.zIndex.drawerPaper + 1,
    position: 'relative',
  },
  toolbar: {
    height: '75px',
    // width: `calc(100% - ${drawerWidth}px)`,
  },
  leftGrid: {
    float: 'left',
    marginLeft: '0%',
    marginRight: '2%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  rightGrid: {
    float: 'right',
    marginRight: '0%',
    margin: 'auto',
  },
  button: {
    background: 'none',

    '&:hover': {
      border: '0.2px solid white',
      background: 'none',
    },
  },
  iconButton: {
    background: 'none',
    borderSizing: 'border-box',

    '&:hover': {
      border: '1px solid white',
    },
  },
  // SIDE MENU
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    zIndex: 0,
    width: drawerWidth,
    fontSize: '1.2rem',
    // height: `calc(100% - 75px)`,
  },
  // PAGINATION
  paginationContainer: {
    display: 'inline-flex',
  },
  // CHECKOUT
  checkoutButton: {
    color: '#fff',
    border: 'solid 1px #fff',
    background: '#66bb6a',
    '&:hover': {
      border: 'solid 1px #fff',
      background: '#66bb6a',
      boxShadow: '0 0 10px #66bb6a',
    },
  },
  // CHECKOUT SUCCESS
  messageContainer: {
    paddingTop: '100px',
    width: '540px',
    height: '320px',
    margin: 'auto',
  },
  infoContainer: {
    paddingTop: '40px',
    paddingBottom: '40px',
    width: '540px',
    height: '100px',
    margin: 'auto',
  },
  successMsg: {
    paddingTop: '100px',
    color: '#66bb6a',
  },
  checkoutLink: {
    width: '120px',
    height: '40px',
    border: '1px solid #D3D3D3',
    margin: 'auto',
    marginLeft: '5px',
    marginRight: '5px',
    textDecoration: 'none',
  },
  errorMsg: {
    paddingTop: '100px',
    color: '#f44336',
  },

  // CART
  clearCartButton: {
    color: '#fff',
    border: 'solid 1px #fff',
    background: '#f44336',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#f44336',
      boxShadow: '0 0 10px #f44336',
    },
  },
  addToCartButton: {
    border: 'solid 1px #fff',
    background: '#66bb6a',
    color: '#fff',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#66bb6a',
      boxShadow: '0 0 10px #66bb6a',
    },
  },
  // CARD
  bookCard: {
    height: '360px',
    margin: '20px 0px',
  },
  // WISH
  wishContainer: {
    minHeight: '100%',
  },
  wishButton: {
    '&:hover': {
      color: '#d50000',
      border: 'none',
      background: 'none',
    },
    '&:focus': {
      border: 'none',
      color: '#d50000',
    },
  },
  wishSelectedButton: {
    color: '#d50000',
  },
  clearWishlistButton: {
    border: 'solid 1px #fff',
    background: '#f44336',
    color: '#fff',
    marginLeft: '43%',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#f44336',
      boxShadow: '0 0 5px #f44336',
      marginLeft: '43%',
    },
  },
  // ORDER MODAL
  modalContainer: {
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '50px',
  },
  modalTableContainer: {
    width: '40%',
    height: '40%',
    backgroundColor: '#fff',
    textAlign: 'center',
    margin: 'auto',
    border: 'solid 1px #000',
    boxShadow: theme.shadows[5],
  },
  modalTableHeader: {
    width: '100%',
    height: '120px',
    background: '#D3D3D3',
    border: 'solid 1px #D3D3D3',
  },
  // PROFILE
  profileCard: {
    width: '50%',
    textAlign: 'center',
    margin: 'auto',
    background: '#fff',
    border: 'solid 1px #D3D3D3',
    marginTop: '50px',
  },
  profileHeader: {
    display: 'inline-block',
    background: '#D3D3D3',
    border: '#D3D3D3',
    width: '100%',
    height: '200px',
  },
  profileAvatar: {
    margin: 'auto',
  },
  // LOGIN
  loginContainer: {
    width: '620px',
    height: '500px',
  },
  loginForm: {
    width: '480px',
    background: '#FAFAFA',
    margin: 'auto',
    marginTop: '5%',
    border: 'solid 1px #D3D3D3',
    paddingLeft: '25px',
    paddingRight: '25p',
    paddingBottom: '40px',
    paddingTop: '10px',
  },
  loginFormGroup: {
    width: '360px',
    backgroundColor: '#fff',
    color: '#363636',
    border: 'solid 1px #777B7E',
    borderRadius: '5px',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',

    '&:hover': {
      outline: 'none',
      border: 'solid 1px #007fff',
    },
  },
  loginButton: {
    border: 'solid 1px #007fff',
    background: '#fff',
    color: '#007fff',
    fontWeight: 'bold',
    width: '50%',
    margin: 'auto',
    marginTop: '25px',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#007fff',
      color: '#fff',
      width: '50%',
      margin: 'auto',
      marginTop: '25px',
    },

    '&:active': {
      boxShadow: '0 0 5px #007fff',
    },
  },
  loginInputLabel: {
    fontSize: '1.1rem',
    textAlign: 'left',
    marginLeft: '40px',
    color: '#363636',
    padding: '5px',
  },
  newUserButton: {
    border: 'solid 1px #e33371',
    background: '#fff',
    color: '#e33371',

    '&:hover': {
      boxShadow: '0 0 5px #e33371',
    },
  },
  // REGISTER
  registerContainer: {
    width: '720px',
    height: '600px',
    marginTop: '25px',
    background: '#FAFAFA',
  },
  registerStepperContainer: {
    margin: 'auto',
    marginTop: '30px',
    width: '60%',
  },
  registerFormGroup: {
    width: '360px',
    backgroundColor: '#fff',
    color: '#363636',
    border: 'solid 1px #777B7E',
    borderRadius: '5px',
    margin: 'auto',
    marginTop: '5px',
    marginBottom: '5px',

    '&:hover': {
      outline: 'none',
      border: 'solid 1px #ec9706',
    },
  },
  registerFormLabel: {
    margin: 'auto',
    fontSize: '1.1rem',
    padding: '5px',
  },
  nextStepButton: {
    border: 'solid 1px #6cbb3c',
    background: '#fff',
    color: '#6cbb3c',
    fontWeight: 'bold',
    width: '25%',
    margin: 'auto',
    marginTop: '25px',

    '&:hover': {
      border: 'solid 1px #fff',
      background: '#6cbb3c',
      color: '#fff',
      width: '25%',
      margin: 'auto',
      marginTop: '25px',
    },

    '&:active': {
      boxShadow: '0 0 5px #007fff',
    },
  },
  registerHelperText: {
    textAlign: 'center',
    marginTop: '10px',
    color: '#ff2800',
  },
  registerSuccess: {
    marginTop: '200px',
    marginBottom: '200px',
  },
  registerError: {
    marginTop: '200px',
    marginBottom: '200px',
  },
  // FOOTER
  footerContainer: {
    width: '100%',
    height: '50px',
    border: '1px solid #000',
  },

  // Multi use elements
  tableHeader: {
    width: '100%',
    height: '120px',
    backgroundColor: '#D3D3D3',
  },
  contentContainer: {
    minHeight: `calc(100vh - 70px)`,
  },
  tableContainer: {
    width: '60%',
    // height: "100%",
    margin: 'auto',
    marginBottom: '20px',
    border: 'solid 2px #D3D3D3',
  },
  alertLogin: {
    width: '70%',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  pageContainer: {
    width: '60%',
    height: '100%',
    margin: 'auto',
    padding: '10px',
  },
}));

export default useStyles;
