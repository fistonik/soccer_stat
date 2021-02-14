import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import "./main.scss";
import img from "../../assets/img/soccer.png";

const Main = (props) => {
  return(
    <div className="container">
      <Header/>
      <h1>Европейский футбол</h1>
      <p>Здесь вы сможете узнать расписание матчей европейских лиг, а так же подробную информацию по играм конкретной команды</p>
      <img className="main__img" src={img}/>
      <Footer/>
    </div>
  );
};

export default Main;
