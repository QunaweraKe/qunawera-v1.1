import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  avatarContainer: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    
  },

  margin: {
    marginTop:7,
    marginBottom:2,

  },
  Button: {
    marginTop:10,
    margin:theme.spacing(1),

  },
  fab:{
    
    padding:theme.spacing(3),
    marginBottom:theme.spacing(1),

  },
  addButton: {
    margin:theme.spacing(1),
    marginTop:25,
  },
imageCard:{
  border:'dotted',
  borderWidth:2,
  borderColor:theme.palette.grey[100],
   marginTop: 5,
   borderRadius: 5, 
   marginBottom: 5,
     width: "400px" ,
},
paper: {
  height:'calc(100%- 94px)',
  borderRadius:5,
  width:"fit-content",
  right:"10",
  top:10
  
 
  },
}));

export default useStyles;
