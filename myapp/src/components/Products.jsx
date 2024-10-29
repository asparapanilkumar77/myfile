import { Grid, Grid2 } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Products = () => {
  return (
    <div>
            <Grid container spacing={1}>
                <Grid  item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sunset
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          “There’s a whole world out there, right outside your window. You’d be a fool to miss it.”
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                    </Grid>

                    <Grid  item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2019/08/17/04/18/morning-4411421_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Nature
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          “To forget how to dig the earth and to tend the soil is to forget ourselves.”
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                    </Grid>
                    <Grid  item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2020/02/11/10/24/lake-4839058_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Beauty
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          “Preserve and cherish the pale blue dot, the only home we’ve ever known.”  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                   </Grid>
                   </Grid>
    </div>
  )
}

export default Products