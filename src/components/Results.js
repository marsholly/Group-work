import React from 'react';
import { ajax } from 'jquery'; //only importing a part of jquery

const Results = React.createClass({
  render() {
    if (this.props.weather && this.props.gender && this.props.style) {
      let temperature = this.props.weather.current_observation.temp_f;
      let condition = this.props.weather.current_observation.weather;
      let season;
      let cond;

      if (temperature <= 40) {
        season = "winter";
      } else if (temperature >= 40 && temperature <= 80) {
        season = "spring";
      } else {
        season = "summer";
      }

      if (condition.includes("rain") || condition.includes("storm")) {
        cond = "rain";
      } else if (condition.includes("snow") || condition.includes("ice") || condition.includes("icy")) {
        cond = "snow";
      } else {
        cond = "dry";
      }

      let gender = this.props.gender;
      let style = this.props.style;

      let strUrl = "./pic/";
      if (gender === "male") {
        strUrl += "male/";
      } else {
        strUrl += "female/";
      }

      if (season === "summer") {
        strUrl += "summer/";
      } else if (season === "winter") {
        strUrl += "winter/";
      } else {
        strUrl += "fallspring/";
      }

      if (cond === "dry") {
        strUrl += "sunny/";
      } else if (cond === "rain") {
        strUrl += "raining/";
      } else {
        strUrl += "snow/";
      }

      if (style === "casual") {
        strUrl += "casual/";
      } else if (style === "formal") {
        strUrl += "formal/";
      } else {
        strUrl += "sport/";
      }

      strUrl += "1.jpg";
      console.log(strUrl);

      return (
        <img id="imgClothes" src={strUrl} />
      )
    } else {
      return (
        <img id="imgClothes" src="http://www.rgbstock.com/cache1nYGZh/users/w/we/weirdvis/300/mmKVlKY.jpg" />
      )
    }
    }
  })

export default Results;
