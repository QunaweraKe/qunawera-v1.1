
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';


// MATERIAL UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
//local import

import { selectUser,createContactUs, key } from '../../redux/user';
import PageTitle from '../../components/PageTitle';
import Avatar from '../../components/Avatar';
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

  const user = useSelector(selectUser);
 
  return (
   <div>
      <PageTitle title="Reach Us" />

     <>
     <div style={{display:"flex",marginLeft:20,marginBottom:8,}}>
     <Avatar user={user} />
<Typography align="center" style={{fontFamily:"monospace",marginTop:5,marginLeft:5,}}>
  
  Hi ,{user.display_name} talk to us...

</Typography>
     </div>
     
  
         
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
  <br/>
   <Grid container={true} spacing={4}>
     <Grid item xs={12} sm={6}>
    <TextField
     style={{marginTop:"10px"}}
     variant="outlined"
    id="title"
    label="Subject"
    onChange={handleTitle}
    type="text"
    value={title}
    name="title"
    required="True"
    fullWidth
  />
       </Grid >
<br/>
<Grid item xs={12} sm={6}>
     <TextField
     style={{marginTop:10,}}
     variant="outlined"
     multiline
    rows={5}
    id="description"
    label="Description"
    onChange={handleDescription}
    type="text"
    value={description}
    name="description"
    required="True"
    fullWidth
  />
    </Grid>
              </Grid>

  <input
  onChange={handleScreenshot}
  name="Screenshot"
  id="Screenshot"
  type="file"
  />
  
<br/>
  <Button  fullWidth  type="submit" color="primary" variant="contained" >
    Submit
  </Button>

  
</form>
     
   
  </>
      
    </div>
    
  );
};


export default ContactUsDialog;
//TODO:ADD SENT NOTIFICATION AFTER CONTACTING US.
//not posting yet when clicked