import React from 'react'
import Layout from '../Components/Layout';
import {MenuList} from '../Data/data.js'
import { CardContent,Typography,Box,Card,CardActions,CardMedia} from '@mui/material';
const Menu = () => {
  return (
    <Layout>
  <Box sx = {{display:'flex', flexWrap:"wrap"}} marginTop="-304px">{MenuList.map(menu => (

<Card sx = {{maxWidth:"390px", display:"flex", m:2}}>

 < CardActions> 
 <CardMedia sx = {{minHeight:'400px'}} component = {"img"} src= {menu.image}alt={menu.name}>
  
 </CardMedia>
 {/* {menu.name} */}
 <CardContent>
<Typography variant= "h5" gutterBottom component = {"div"}>
  {menu.name}
</Typography>
<Typography variant='body2'>
{menu.Description}
</Typography>

 </CardContent>
 </CardActions>

</Card>
))
}

  </Box>

    </Layout>
    
  )
}

export default Menu









// git init --- inistalise 
// git add .  -- readme -- (project file description 
//git commit -m"first commit"  --- first commit 
// git branch -M main 
//