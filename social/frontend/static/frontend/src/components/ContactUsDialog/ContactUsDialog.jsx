
import React from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


//local import
import { createContactUs, key } from '../../redux/user';
import PageTitle from '../../components/PageTitle';

const ContactUsDialog= () => {
  const dispatch = useDispatch();
 const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [Screenshot, setScreenshot] = React.useState(null);
   

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
  
    try{
    const formData = new FormData();
    formData.append("email", email);
    formData.append("description", description);
    formData.append("title", title);
    formData.append( "Screenshot",Screenshot, Screenshot.name);
    dispatch(createContactUs(formData));
    setsetScreenshot('');
    setDescription('');
    setTitle('');
    setEmail('');
   
    return console.log("success")
  }catch(err){
    return console.log("error")
  }
  };


 
  return (
   <div>
      <PageTitle title="Reach Us" />

     <>
     <Container style={{padding:4,marginLeft:20}} maxWidth="md">
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
        </Container>
  </>
      
    </div>
    
  );
};


export default ContactUsDialog;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked