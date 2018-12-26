import Content from "../../Content";
import React from "react";
import Search from "../../Toolbar/Search";
import {withNamespaces} from "react-i18next";
import {setSearchQuery} from "../../../actions";
import {connect} from "react-redux";

const Home = ({setSearchQuery}) => {
  setSearchQuery("");

  return (
    <Content relax>
      <img
        src="https://assets.refsheet.net/assets/logos/RefsheetLogo_White_200.png"
        className="logo"
        alt="Refsheet.net"
        width={100}
        height={100}
      />

      <div className='toolbar' style={{backgroundColor: 'transparent', border: 'none'}}>
        <Search inputStyle={{width: '100%'}} />
      </div>
    </Content>
  )
};

const connected = connect(null, {setSearchQuery})(Home);
const translated = withNamespaces('common')(connected);

export default translated;