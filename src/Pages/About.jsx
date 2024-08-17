import React from 'react'
import Layout from '../Components/Layout'
import { Typography,Box } from '@mui/material';
const About = () => {
  return (
    <div>
      <Layout>

        <Box sx={{ fontSize:"20px",padding:3,marginTop:"-204px",marginBottom:"200px",textAlign:"center","& p": {fontWeight:'bold'},
     
     "@media (max-width:600px)": {
      mt: 0,
      "& h4 ": {
        fontSize: "1.5rem",
      },
    },

     }}>
        <h1>About</h1>
        <Typography>
   Welcome to Taksh Cuisine

        </Typography>
        <p>Welcome to Taksh Cuisine, Angul's premier destination for exquisite dining experiences. Located in the heart of JSPL Nagar, we offer a unique blend of traditional and contemporary culinary delights, designed to tantalize your taste buds and provide an unforgettable dining experience.

At Taksh, we pride ourselves on our carefully crafted menu, featuring a wide array of dishes that celebrate the rich flavors and aromas of Indian cuisine. Whether you’re in the mood for a hearty meal with family or a cozy dinner with friends, our warm and inviting atmosphere is perfect for every occasion.

Our chefs use only the freshest ingredients, handpicked to ensure that every dish served is of the highest quality. From mouth-watering appetizers to decadent desserts, every plate at Taksh is a reflection of our commitment to culinary excellence.

We invite you to join us at Taksh Cuisine and embark on a culinary journey that promises to be both delightful and memorable. Whether you’re a local resident or a visitor to Angul, Taksh is the perfect place to indulge in good food, great service, and wonderful memories.

</p>

        </Box>
        
      </Layout>
    </div>
  )
}

export default About;
