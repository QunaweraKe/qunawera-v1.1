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

    likeContainer: {
      alignItems: 'center',
      display: 'flex',
     
      
    },
   
    status: {
      fontSize: 15,
      fontWeight: "600",
      marginLeft: 1,
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
    menuPaper:{
          "& .MuiPaper-root":{
            backgroundColor:theme.palette.grey[50]
          }
    
    },
    postContainer: {
      display: 'flex',
      padding: theme.spacing(2),
      margin:8,
      marginTop: theme.spacing(3),
      borderColor: theme.palette.grey[150],
      marginBottom: theme.spacing(2),
      minWidth:350,
      
    
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
      marginLeft:0,
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
    actions:{
      fontFamily:"monospace",
      fontWeight:"bold",
     fontSize:13,
    },
    root: {
      marginBottom:8,
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