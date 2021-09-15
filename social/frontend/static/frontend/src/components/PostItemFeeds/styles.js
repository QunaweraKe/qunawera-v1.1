import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => {
  return ({
    ...theme.custom,


    avatarContainer: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      marginLeft:0,
    },



    listItem: {
      linespacing: "1px",
      fontSize: 15,
      marginLeft: "2%"
    },
    cardActionsRoot: {
      paddingTop: 0,
    },

    title: {
      fontWeight: "bolder",
      fontSize: "25px",
    },
actionButton:{
  justifyContent: 'flex-end',
 
  fontWeight:"bolder",
  fontSize:15,
   '&:hover': {
    backgroundColor:"none",
  },
  flexGrow: 1,
},
    likeContainer: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      
    },
   
    status: {
      fontSize: 10,
      fontWeight: "600",
      marginLeft: 2,
      marginTop: 6,
      fontFamily: "monospace"
    },
    repostContainer: {
      display: "flex",
      marginLeft: 50,
      marginBottom: 10,
    },

    postAction: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(-1),
    },
    postContainer: {
      display: 'flex',
      padding: theme.spacing(1),
      margin: 5,
      marginTop: theme.spacing(3),
      borderColor: theme.palette.grey[150],
      marginBottom: theme.spacing(2),
      
    
    },

    textSize: {
      fontSize: 14,
    },

    title: {
      fontWeight: "bolder",
      fontSize: "25px",
    },
   
    postBody: {
      marginTop: 1,
      marginBottom: 2,
      padding: theme.spacing(2, 2, 0.5, 2),
      width:"100%"
    },

    Link: {
      textDecoration: "none",
      color: "black"
    },
    media: {
     
      paddingTop: '56.25%',
      marginRight: theme.spacing(2),
      width: "100%",
      objectFit: 'cover',
      borderRadius:5,
    },
    
    buttonGroup: {
      marginTop:5,
      marginLeft:10,
      marginBottom:8,
    },
    avatarMenu: {
      height: "2px",
      width: "2px"
    },
    paper: {
      marginRight: theme.spacing(2),
     position:"relative"
    
    },
    
    root: {
   
      marginTop:6,
      position: 'relative',
      flexGrow: 1,
      '&:hover': {
        transform: "none !important"
      },
      focus: {
        "&&&": {
          opacity: 0
        }
      }
    },
  });
});

export default useStyles;