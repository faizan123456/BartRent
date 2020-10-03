import React from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
// Grid Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Category List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// Category Icons
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CommuteIcon from "@material-ui/icons/Commute";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import SportsTennisIcon from "@material-ui/icons/SportsTennis";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import ImportContactsTwoToneIcon from "@material-ui/icons/ImportContactsTwoTone";

import { makeStyles, emphasize, withStyles } from "@material-ui/core/styles";
// Breadcrumb
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Paper } from "@material-ui/core";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);
const useStyles = makeStyles((theme) => ({
  hero: {
    height: "180px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: 400,
    height: "auto",
    "-webkit-transition": ".3s ease-in-out",
    transition: ".3s ease-in-out",
    "&:hover": {
      width: 430,
    },
  },
  breadcrumb: {
    marginLeft: 65,
    marginTop: 40,
  },
}));

const GridContent = (props) => {
  const classes = useStyles();

  const images = [
    {
      path:
        "https://thumbor.forbes.com/thumbor/2000x1009/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5cdb058a5218470008b0b00f%2F0x0.jpg%3Ffit%3Dscale",
    },
    {
      path:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/45/16/dd/the-mood-luxury-rooms.jpg",
    },
    {
      path:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/finding-and-understanding-your-conversion-rate-for-your-products-on-amazon-5ddfc9c0e0ea9-760x400.png",
    },
    {
      path:
        "https://www.bajajfinserv.in/5_Best_Redmi_Phones_Under_Rs15000_img1_redmi-cluster790x345-min.jpg",
    },
    {
      path:
        "https://fdn.gsmarena.com/imgroot/reviews/20/apple-ios-14-review/-728x314/thumb.jpg",
    },
    {
      path:
        "https://image.shutterstock.com/image-illustration/set-white-home-appliances-on-260nw-692475616.jpg",
    },
    {
      path:
        "https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/01/appliances.jpg?fit=600%2C360&ssl=1",
    },
    {
      path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_L-gj-Or_HXYB6OT3YTleupt33uA49l3M1g&usqp=CAU",
    },
    {
      path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB8OefEyfIK6ThI0ESDK6fjVBIJMbBRlY_4g&usqp=CAU",
    },
  ];

  return (
    <React.Fragment>
      <div
        className={classes.hero}
        style={{
          backgroundImage: `url('https://www.avrnetworking.com/wp-content/uploads/2019/08/ITServices-1024x683.jpg')`,
        }}
      ></div>

      <Box className={classes.breadcrumb}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledBreadcrumb
              style={{ fontSize: 15, cursor: "pointer" }}
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
          </Link>
          <StyledBreadcrumb
            disabled
            style={{ fontSize: 15 }}
            label="Products"
          />
          <StyledBreadcrumb
            style={{ fontSize: 15 }}
            label="Rental Products"
            //icon={<ExpandMoreIcon />}
          />
          <ExpandMoreIcon />
        </Breadcrumbs>
        <hr style={{ marginTop: 40 }} />
      </Box>

      <div className="container bg-light" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-md-8">
            <Box style={{ marginTop: 30 }}>
              {images.map((item, index) => (
                <div className="row">
                  <div className="col-md-6">
                    <Card key={index} style={{ width: 350, marginBottom: 10 }}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={item.path}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col-md-6">
                    <Card key={index} style={{ width: 350, marginBottom: 30 }}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={item.path}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              ))}
            </Box>
          </div>
          <div className="col-md-4">
            <Box position="static" style={{ marginTop: 30, marginRight: 10 }}>
              <Paper elevation={0}>
                <h2 className="ml-2 text-center">Categories</h2>
                <Divider />
                <List component="nav">
                  <ListItem button>
                    <ListItemIcon>
                      <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mobile Phones" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <CommuteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cars And Vans" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <DirectionsBikeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Motor Bikes and Cycles" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <HouseOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Houses and Plottes" />
                  </ListItem>

                  <ListItem button>
                    <ListItemIcon>
                      <WeekendOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Furniture" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <SportsTennisIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sports" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <ImportContactsTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Books" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <i className="fas fa-tv" />
                    </ListItemIcon>
                    <ListItemText primary="Electronics" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <FitnessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gym Weight" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <i className="fas fa-tshirt" />
                    </ListItemIcon>
                    <ListItemText primary="Clothes" />
                  </ListItem>
                </List>
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GridContent;
