import ColorSwatch from "../../shared/ColorSwatch";
import Content from "../../Content";
import React from "react";

const Home = () => {
  return (
    <Content relax>
      <img
        src="https://assets.refsheet.net/assets/logos/RefsheetLogo_White_200.png"
        className="logo"
        alt="Refsheet.net"
        width={100}
        height={100}
      />

      <h1>What do?</h1>

      <div>
        <ColorSwatch color={"#2bbaad"} />
        <ColorSwatch color={"#1094cd"} />
      </div>
    </Content>
  )
};

export default Home;