
import React from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//local import
import { createContactUs, key } from '../../redux/user';
import PageTitle from '../../components/PageTitle';

const ContactUsDialog= () => {
  const dispatch = useDispatch();
 const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [Screenshot, setScreenshot] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleScreenshot = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    setScreenshot(event.target.files[0]);
  };
  const handleDescription = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  const handleTitle = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const handleEmail = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("description", description);
    formData.append("title", title);
    formData.append( "Screenshot",Screenshot, Screenshot.name);
    dispatch(createContactUs(formData));
    setsetScreenshot('');
    setDescription('');
    setTitle('');
    setEmail('');
  };


 
  return (
   <div>
      <PageTitle title="Reach Us" />

     <>

     <Accordion
          expanded={expanded === 'support'}
          onChange={handleChange('support')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="support-header"
          >
            <Typography style={{fontFamily:"monospace"}}>Fill Fields Below </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <form  onSubmit={handleSubmit}>
  
  <TextField
   name="email"
    color="textSecondary"
    id="email"
    label="Email Address"
    type="email"
    onChange={handleEmail}
    variant="outlined"
     value={email}
     fullWidth
     required="True"
  />
    <TextField
     style={{marginTop:"10px"}}
     variant="outlined"
    id="title"
    label="Subject"
    onChange={handleTitle}
    type="text"
    value={title}
    fullWidth
    name="title"
    required="True"
  />
     <TextField
     style={{marginTop:"10px"}}
     variant="outlined"
     multiline
    rows={6}
    id="description"
    label="Description"
    onChange={handleDescription}
    type="text"
    value={description}
    fullWidth
    name="description"
    required="True"
  />
  <input
  onChange={handleScreenshot}
  name="Screenshot"
  id="Screenshot"
  type="file"
  />
  

  <Button fullWidth  type="submit" color="primary" variant="contained" >
    Submit
  </Button>

  
</form>
          </AccordionDetails>
          </Accordion>
     
     
  </>
      
    </div>
    
  );
};


export default ContactUsDialog;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked