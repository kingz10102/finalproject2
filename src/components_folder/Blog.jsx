import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import  Avatar  from '@material-ui/core/Avatar';





const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  sneaker: {
    backgroundImage: `linear-gradient(rgba(0,0,0.5), rgba(0,0,0.5)), url('https://images.unsplash.com/photo-1496115898806-2b023a9dcb6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1994&q=80')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',

  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  }
}));

function Blog() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color='primary'>
            KICKZZ Blog
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box className={classes.sneaker}>
        <Box>Describe Your Kick Game</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles 
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://media.istockphoto.com/photos/3d-basketball-drinks-at-the-party-picture-id522344211" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      BALL GOD
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    March 11, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Accumsan bibendum dictumst egestas facilisis fringilla litora mi non per potenti quisque rhoncus risus sociis ultrices ut vivamis suscipit ultricies venenatis.
  luctus nec nisl odio per primis proin quis torquent tristique. penatibus posuere praesent quis quisque sagittis scelerisque semper suspendisse tristique ullamcorper vehicula volutpat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/3152045/pexels-photo-3152045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Crossover Prince
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    March 16, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?cs=srgb&dl=pexels-wallace-chuck-2834917.jpg&fm=jpg" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Alley-OPP
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    April 1, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      The new Mutumbo
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    April 20, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/1192043/pexels-photo-1192043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Accumsan bibendum dictumst egestas facilisis fringilla litora mi non per potenti quisque rhoncus risus sociis ultrices ut vivamis suscipit ultricies venenatis.
  luctus nec nisl odio per primis proin quis torquent tristique. penatibus posuere praesent quis quisque sagittis scelerisque semper suspendisse tristique ullamcorper vehicula volutpat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://media.istockphoto.com/photos/3d-basketball-bunny-picture-id480719227" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      POSTUP MONEY$$ MAKER
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 5, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="istock sneaker photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ambitious Sneakers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/2642389/pexels-photo-2642389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      3pt Gangsta
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                    June 17, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box>
                 
                </Box>
      </CardActions>
    </Card>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default Blog;