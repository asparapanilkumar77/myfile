import { Grid } from '@mui/material'
import React from 'react'

const Apsara = () => {
  return (
    <div>
        <Grid container spacing={1}>
            <Grid item xs={4}>
            <h2>Welcome to grid one</h2>
            <img src="https://th.bing.com/th/id/OIP.d7mkodpaOY_bZkkYsEEzxgHaK0?w=832&h=1216&rs=1&pid=ImgDetMain" height="200" width="200"/>
        </Grid>
        <Grid item xs={4}>
            <h2>Welcome to grid two</h2>
            <img src="https://img.freepik.com/premium-photo/cheerful-pikachu-with-joyful-smile_985323-15254.jpg" height="200" width="200"/>
        </Grid>
        <Grid item xs={4}>
        <h2>Welcome to grid three</h2>
            <img src="https://i.pinimg.com/736x/67/00/c4/6700c4a01177819ddab6c00abbb62be5.jpg" height="200" width="200"/>
            
        </Grid>
        </Grid>
        
    </div>
  )
}

export default Apsara