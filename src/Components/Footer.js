import React from 'react'
import {Box,Icon,Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <Box >
       
<Typography variant = {'h6'} sx={{textAlign:'center',color:'white', bgcolor:'black', p:3}}>
<Box sx = {{my:3, "& svg": {
cursor:'pointer',
fontSize:"60px"
}

,
"& svg :hover":{
color:'yellow',
transform:'translateX(5px)',
transition:'all 400ms'
}}}>
  
  <InstagramIcon>

  </InstagramIcon>
<XIcon>


</XIcon>
<YouTubeIcon></YouTubeIcon>
<GitHubIcon></GitHubIcon>

        </Box>
    All Rights Reserved
</Typography>
        
    </Box>
  )
}

export default Footer
