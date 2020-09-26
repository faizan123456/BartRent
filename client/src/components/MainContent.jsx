import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

headerTitle: {
    color: "#24355a",
    fontWeight: 550,
    lineHeight: "1em",
    fontSize: 36,
    margin: 0,
    fontStyle: "normal",
    fontFamily: "Sofia"
},
horzLine: {
    width: "5%", 
    marginLeft: 146, 
    backgroundColor: "orange", 
    border: "3px solid orange", 
    borderRadius: 5
},
portalSelect: {
  opacity: "0.5", 
  backgroundColor: "black", 
  fontFamily: "Sofia",
  position: "absolute",
  zIndex: 1,
  fontSize: 50,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "green",
    opacity: 0.7
  }
},
portalSelectLink: {
  marginLeft: 10, 
  marginRight: 10,
},
hero: {
  height: "400px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "4rem",
},
media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: 300,
	  height: 'auto',
	  '-webkit-transition': '.3s ease-in-out',
    transition: '.3s ease-in-out',
    '&:hover': {
        width: 350
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },


}));

const MainContent = () => {
    const classes = useStyles();

    const images = [
        { path: "https://thumbor.forbes.com/thumbor/2000x1009/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cdb058a5218470008b0b00f%2F0x0.jpg%3Ffit%3Dscale"},
        { path: "https://media-cdn.tripadvisor.com/media/photo-s/16/45/16/dd/the-mood-luxury-rooms.jpg"},
        { path: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/finding-and-understanding-your-conversion-rate-for-your-products-on-amazon-5ddfc9c0e0ea9-760x400.png"},
        { path: "https://www.bajajfinserv.in/5_Best_Redmi_Phones_Under_Rs15000_img1_redmi-cluster790x345-min.jpg"},
        { path: "https://fdn.gsmarena.com/imgroot/reviews/20/apple-ios-14-review/-728x314/thumb.jpg"},
        { path: "https://image.shutterstock.com/image-illustration/set-white-home-appliances-on-260nw-692475616.jpg"},
        { path: "https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/01/appliances.jpg?fit=600%2C360&ssl=1"},
        { path: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_L-gj-Or_HXYB6OT3YTleupt33uA49l3M1g&usqp=CAU"},
        { path: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB8OefEyfIK6ThI0ESDK6fjVBIJMbBRlY_4g&usqp=CAU"}        
    ];

    return (
      <React.Fragment>
        
      <Box className="bg-light">
      <section className="container">
        <Typography align="left" className={classes.headerTitle} style={{ marginTop: 40 }}>
          Best Rentals            
          <hr className={classes.horzLine} />
        </Typography>
        {/* <Box className="jumbotron"> */}
        <OwlCarousel 
          className="owl-theme" 
          autoplay="true" 
          autoplayTimeout="5000" 
          autoplayHoverPause="true" 
          loop 
          margin={10} 
          nav >
              {images.map((item, index) => (
                  <Card style={{margin: 3}}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={item.path}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: "expanded",
                      })}
                      //onClick={handleExpandClick}
                      //aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              ))}
          </OwlCarousel>
            
        {/* </Box>       */}
      </section>
        <hr />
      <section className="container">
      <Typography align="left" className={classes.headerTitle} style={{ marginTop: 40 }}>
        Best Barts            
        <hr className={classes.horzLine} style={{ marginLeft: 118 }} />
      </Typography>
      <OwlCarousel 
        className="owl-theme" 
        autoplay="true" 
        autoplayTimeout="5000" 
        autoplayHoverPause="true" 
        loop 
        margin={10} 
        nav >
            {images.map((item, index) => (
                <Card style={{ margin: 3 }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image={item.path}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: "expanded",
                    })}
                    //onClick={handleExpandClick}
                    //aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                      minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                      and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                      without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                      medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                      again without stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
        </OwlCarousel>     
      </section>
      </Box>

      <Box> 
        <div className="row" style={{ marginTop: 70 }}>
          <img className={classes.hero} style={{ width: "50%"}} src="https://thumbor.forbes.com/thumbor/2000x1009/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cdb058a5218470008b0b00f%2F0x0.jpg%3Ffit%3Dscale" />
          <Card className={classes.portalSelect} style={{ marginTop: 150, marginLeft:120}}>
            <Link to="/" className={classes.portalSelectLink} style={{ textDecoration: "none", color: "#fff" }}> Go to Rentals </Link>
          </Card>

          <img className={classes.hero} style={{ width: "50%"}} src="https://www.moneycrashers.com/wp-content/uploads/2011/06/best-swapping-websites-1200x802.jpg?p=32454" />
          <Card className={classes.portalSelect} style={{ marginTop: 150, marginLeft:700}}>
            <Link to="/" className={classes.portalSelectLink} style={{ textDecoration: "none", color: "#fff" }}> Go to Barts </Link>
          </Card>        
        </div>       
      </Box>

      {/* <Box style={{ marginTop: 80, height: 200, backgroundImage: `url('https://media.istockphoto.com/videos/silk-black-flag-animation-of-dark-color-background-video-waving-in-video-id1170467563?s=640x640')`, color: "#fff" }}>
        <div className="container">
          <div className="row">
					  <div className="col-12 col-md-12 col-lg-6 col-xl-4 at-fwidget-content">
              
            </div>
        </div>
      </Box> */}

      
      
      </React.Fragment>
    );
}
 
export default MainContent;