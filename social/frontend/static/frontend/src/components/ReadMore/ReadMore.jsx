import {React,useState} from 'react';
//local 
import useStyles from './styles';

const ReadMore = ({children}) => {
  const classes = useStyles();
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={classes.readMore}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>

  );
};

export default ReadMore;
