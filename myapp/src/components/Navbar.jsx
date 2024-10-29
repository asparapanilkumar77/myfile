import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
const Navbar = () => {
  return (
    <div>
       <AppBar sx={{
    
 
    background: '#20002c',
background: '-webkit-linear-gradient(to right, #cbb4d4, #20002c)',
background: 'linear-gradient(to right, #cbb4d4, #20002c)'

    
      }}>

        <Toolbar>
            <Typography variant ="h6"> My_app </Typography>
            <Link to ='/pro'>
            <button variant="contained">Apsara</button>
            </Link>

            <Link to ='/s'>
            <button variant="contained">Products</button>
            </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar