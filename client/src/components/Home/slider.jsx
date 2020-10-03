import React from "react";
import Slider from "react-animated-slider";
import "./Slider.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  slider: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderCard: {
    marginTop: -530,
    marginLeft: 80,
    backgroundColor: "#000000",
    color: "#fff",
    borderRadius: 8,
    opacity: 0.5,
    width: 400,
    height: 450,
    zIndex: 1,
    position: "absolute",
  },
}));

const MainSlider = () => {
  const classes = useStyles();
  const images = [
    {
      path:
        "https://www.moneycrashers.com/wp-content/uploads/2011/06/best-swapping-websites-1200x802.jpg?p=32454",
    },
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
        "https://www.avrnetworking.com/wp-content/uploads/2019/08/ITServices-1024x683.jpg",
    },
    {
      path:
        "https://www.telegraph.co.uk/content/dam/recommended/2019/01/11/Best-laptops-for-everyday-use-review-xlarge_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png",
    },
  ];

  return (
    <React.Fragment>
      <Slider previousButton={false} nextButton={false} autoplay={3000}>
        {images.map((item, index) => (
          <div
            className={classes.slider}
            key={index}
            style={{ backgroundImage: `url('${item.path}')` }}
          ></div>
        ))}
      </Slider>
      <Card className={classes.sliderCard}>This is a Card</Card>
    </React.Fragment>
  );
};

export default MainSlider;
