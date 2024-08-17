import React from 'react'
import Layout from '../Components/Layout'
import {TableBody,TableRow,TableContainer,TableCell,Table,Typography,Box, TableHead,Paper} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Contact = () => {
  return (
    <div>
      <Layout>
        <Box sx = {{my:4,textSize:"34px",marginTop:"-300px", marginBotton:"300px", textAlign:"center",
          "& p ": {
            fontWeight:"bold"

          }
        }}>
          <Typography variant = "h1">

          Contact us
          </Typography>
       
<p>
We’d love to hear from you! Whether you have questions, feedback, or simply want to make a reservation, feel free to reach out to us.

Address:
Taksh Cuisine
JSPL Nagar, Angul, Odisha - 759122

Phone: +91 98765 43210

Email: takshcuisine@gmail.com

Business Hours:
Monday to Sunday: 11:00 AM - 10:00 PM
</p>


        </Box>
<Box sx = {{m:3,  width:"600px", ml:10}}>


  <TableContainer component = {Paper}>
<Table aria-label = "contact table">
  <TableHead>
<TableRow>

  <TableCell sx = {{bgcolor:"black",color : "white"
    ,"@media (max-width:600px)": {
            width: "300px",
          },
  }} 
  align="center">
    Conntact Details
  </TableCell>
</TableRow>

  </TableHead>
<TableBody>
  <TableRow>
    <TableCell>

   < PhoneIcon sx = {{pt:1,color:"red"}}> 
   
   </PhoneIcon>
   <h3>   +91 98765 43210 (tollfree)
   </h3>
    </TableCell>
    
  </TableRow>
  <TableRow>
  <TableCell >
      <EmailIcon sx = {{pt:1,color:"skyblue"}}>

      </EmailIcon>
      <h3>takshcuisine@gmail.com</h3>
    </TableCell>
  </TableRow>
  <TableRow>
<TableCell>
<SupportAgentIcon></SupportAgentIcon>
  <h3>
1800-0204-4030
  </h3>
</TableCell>

  </TableRow>
</TableBody>

</Table>

  </TableContainer>
</Box>
      </Layout>
    </div>
  )
}

export default Contact
