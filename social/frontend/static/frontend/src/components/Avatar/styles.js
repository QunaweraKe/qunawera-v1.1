import { makeStyles } from '@material-ui/core/styles';


function randomColor(){
  let hex =Math.floor(Math.random()*0xFFFFF);
  let randcolor ='#'+ hex.toString(16);
  return randcolor
}
const useStyles = makeStyles((theme) => ({
  ...theme.custom,
  root: {

    borderColor: randomColor(),
    borderRadius: '50%',
    border: 'solid',
    borderWidth:3,
    height: (size) => size,
    width: (size) => size,
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
   
  },

}));

export default useStyles;
