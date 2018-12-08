import ColorSwatch from "../../shared/ColorSwatch";
import Content from "../../Content";
import React from "react";
import Search from "../../Toolbar/Search";

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

      <h1>Refsheet Artist</h1>

      <div className='toolbar' style={{backgroundColor: 'transparent', border: 'none'}}>
        <Search inputStyle={{width: '100%'}} />
      </div>
    </Content>
  )
};

export default Home;