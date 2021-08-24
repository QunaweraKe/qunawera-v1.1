
import React from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Divider, Tooltip } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


//local import
import { createContactUs, key } from '../../redux/user';
import { APP_NAME} from '../../constants';
import PageTitle from '../../components/PageTitle';

const ContactUsDialog= () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    email: '',
    description:'',

  });

   

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,

    });
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createContactUs(formData));
    setFormData('');
   
  };
  return (
   <div>
      <PageTitle title="Reach Us" />

     <>
     <Accordion
          expanded={expanded === 'email'}
          onChange={handleAccordionChange('email')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="email-header"
          >
            <Typography style={{fontFamily:"monospace"}}>Submit your query</Typography>
          </AccordionSummary>
          <AccordionDetails>
            
          <TextField
           name="email"
            color="textSecondary"
            id="email"
            label="Email Address"
            type="email"
            onChange={handleChange}
            variant="filled"
             value={formData.email}
             fullWidth
             required
          />
             <TextField
             style={{marginTop:"10px"}}
             variant="filled"
             multiline
            rows={6}
            id="description"
            label="Description"
            onChange={handleChange}
            type="text"
            value={formData.description}
            fullWidth
            name="description"
            required
          />
            <Divider orientation="horizontal " light variant='inset' />
            <div style={{marginLeft:"15px",marginTop:"15px",marginBottom:"5px",padding:"3px"}}>
          <Button    onClick={handleSubmit} color="primary" variant="outlined" >
            Send
          </Button>
      
          <Button  style={{marginLeft:"4px"}} onClick={handleClose} color="textSecondary" variant="outlined">
            Cancel
          </Button>
        </div>
          </AccordionDetails>
        </Accordion>
        
  </>
      
    </div>
    
  );
};


export default ContactUsDialog;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked