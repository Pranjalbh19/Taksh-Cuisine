import React,{useState} from 'react'
import {AppBar, Box, Toolbar, Typography, IconButton ,Drawer, Divider} from '@mui/material'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HeaderStyle from "../Style/HeaderStyle.css";
// import Dosa from '../Utils/Dosa.jpg';

import { NavLink } from 'react-router-dom';
// using usestate
const Header = () => {
  //using usestate
  const[open,setopen]= useState(false);
  // funct to handle drawer
  const handleDrawer = ()=>{setopen(!open)}

const drawer = (
  
<Box onClick = {handleDrawer} sx = {{textAlign:'center'}}>

    <Typography color="red">
  <h3>
    <DinnerDiningIcon />
    Taksh cuisine
  </h3>
  <Divider></Divider>
</Typography>
  <ul className="mobile-nav">
    <li>
      <NavLink to={'/Home'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/Menu'}>Menu</NavLink>
      <NavLink to={'/Contact'}>ContactUS</NavLink>
    </li>
  </ul>
</Box>




)
  return (
    
    <div>
      <Box>
      <AppBar component={'nav'} sx={{ bgcolor: "red" }}>
        <Toolbar>
          <IconButton 
          color='inherit'
          aria_label="open drawer"
          edge = "start"
          sx = {{ mr: 2, display: {xs:"block"}}}
          onClick={handleDrawer}>
            <MenuOpenIcon />
          </IconButton>
          <Typography color="yellow">
            <h3>
              <DinnerDiningIcon />
              Taksh cuisine
            </h3>
          </Typography>
         
            <ul className="Nav">
              <li>
                <NavLink to={'/Home'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/Menu'}>Menu</NavLink>
                <NavLink to={'/Contact'}>ContactUS</NavLink>
              </li>
            </ul>
          
        </Toolbar>
      </AppBar>
      </Box>
      <Box component="nav">
        <Drawer variant="temporary" open = {open} onClose={handleDrawer}
          sx={{ display: { xs: "block" } ,  "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px"}}}>
            {drawer}
          </Drawer>
          

      </Box>
      <Box sx={{marginTop:'340px'}}>

      <Toolbar></Toolbar>

      </Box>
    </div>
  )
}

export default Header;